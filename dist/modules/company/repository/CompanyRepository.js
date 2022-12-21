"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _Company = _interopRequireDefault(require("../entities/Company"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CompanyRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_Company.default);
  }
  async findAll({
    page,
    skip,
    take,
    ref,
    search
  }) {
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({
      ref
    });
    const [company, count] = await this.repo.createQueryBuilder('company').skip(skip).take(take).where(qb => {
      if (search !== undefined) {
        qb.where(`company.com_status_s = :ref and LOWER(company.com_name_s) like :search`, {
          ref: status.id,
          search: `%${search}%`
        });
      } else {
        qb.where(`company.com_status_s = :ref `, {
          ref: status.id
        });
      }
    }).orderBy('company.com_fantasy_s').getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: company
    };
    return result;
  }
  async findById(id) {
    const data = await this.repo.find({
      where: {
        id
      },
      relations: ['contacts', 'contacts.contactTypeRef']
    });
    if (data.length > 0) {
      return data[0];
    }
    return null;
  }
  async findByName(name) {
    const data = await this.repo.findOneBy({
      name
    });
    return data;
  }
  async findValidUpdate(id, name) {
    const data = await this.repo.createQueryBuilder('company').where('company.com_id_s <> :id and company.com_name_s = :name', {
      id,
      name
    }).getOne();
    return data;
  }
  async create(company, contactsCompany) {
    const obj = await _database.dataSource.manager.transaction(async transactionalEntityManager => {
      const obj = await transactionalEntityManager.save(company);
      if (contactsCompany && contactsCompany.length > 0) {
        // eslint-disable-next-line no-restricted-syntax
        for await (const contactCompany of contactsCompany) {
          contactCompany.company = obj.id;
          obj.contacts = [];
          obj.contacts.push(await transactionalEntityManager.save(contactCompany));
        }
      }
      return obj;
    });
    return obj;
  }
  async update(company) {
    await this.repo.save(company);
    return company;
  }
  async remove(company) {
    await this.repo.remove(company);
  }
}
exports.default = CompanyRepository;
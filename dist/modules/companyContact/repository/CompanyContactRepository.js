"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _CompanyContact = _interopRequireDefault(require("../entities/CompanyContact"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CompanyContactRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_CompanyContact.default);
  }
  async findAll({
    company,
    page,
    skip,
    take,
    search
  }) {
    const [companyContact, count] = await this.repo.createQueryBuilder('company_contact').skip(skip).take(take).where(qb => {
      if (search !== undefined) {
        qb.where('company_contact.cco_company_s = :company and company_contact.cco_name_s like :search', {
          company,
          search: `%${search}%`
        });
      } else {
        qb.where('company_contact.cco_company_s = :company', {
          company
        });
      }
    }).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: companyContact
    };
    return result;
  }
  async findById(company, id) {
    const data = await this.repo.findOneBy({
      company,
      id
    });
    return data;
  }
  async findByName(name) {
    const data = await this.repo.findOneBy({
      name
    });
    return data;
  }
  async findValidUpdate(id, name) {
    const data = await this.repo.createQueryBuilder('company_contact').where('company_contact.cco_id_s <> :id and company_contact.cco_name_s = :name', {
      id,
      name
    }).getOne();
    return data;
  }
  async create(company_contact) {
    const data = this.repo.save(company_contact);
    return data;
  }
  async update(company_contact) {
    await this.repo.save(company_contact);
    return company_contact;
  }
  async remove(company_contact) {
    await this.repo.remove(company_contact);
  }
}
exports.default = CompanyContactRepository;
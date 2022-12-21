"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _ContactType = _interopRequireDefault(require("../entities/ContactType"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ContactTypeRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_ContactType.default);
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
    const [contactType, count] = await this.repo.createQueryBuilder('contact_type').skip(skip).take(take).where(qb => {
      if (search !== undefined) {
        qb.where(`contact_type.cty_status_s = :ref and  LOWER(contact_type.cty_name_s) like :search`, {
          ref: status.id,
          search: `%${search}%`
        });
      } else {
        qb.where(`contact_type.cty_status_s = :ref `, {
          ref: status.id
        });
      }
    }).orderBy('contact_type.cty_name_s').getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: contactType
    };
    return result;
  }
  async findById(id) {
    const data = await this.repo.findOneBy({
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
    const data = await this.repo.createQueryBuilder('contact_type').where('contact_type.cty_id_s <> :id and contact_type.cty_name_s = :name', {
      id,
      name
    }).getOne();
    return data;
  }
  async create(contact_type) {
    const data = this.repo.save(contact_type);
    return data;
  }
  async update(contact_type) {
    await this.repo.save(contact_type);
    return contact_type;
  }
  async remove(contact_type) {
    await this.repo.remove(contact_type);
  }
}
exports.default = ContactTypeRepository;
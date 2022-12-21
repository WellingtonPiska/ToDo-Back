"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _Group = _interopRequireDefault(require("../entities/Group"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class GroupRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_Group.default);
  }
  async findAll({
    page,
    skip,
    take,
    ref
  }) {
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({
      ref
    });
    const [group, count] = await this.repo.createQueryBuilder('group').skip(skip).take(take).where('group.gro_status_s = :ref', {
      ref: status.id
    }).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: group
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
    const data = await this.repo.createQueryBuilder('group').where('group.gro_id_s <> :id and group.gro_name_s = :name', {
      id,
      name
    }).getOne();
    return data;
  }
  async create(group) {
    const data = this.repo.save(group);
    return data;
  }
  async update(group) {
    await this.repo.save(group);
    return group;
  }
  async remove(group) {
    await this.repo.remove(group);
  }
}
exports.default = GroupRepository;
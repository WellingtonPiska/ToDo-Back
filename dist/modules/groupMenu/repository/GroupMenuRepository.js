"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _GroupMenu = _interopRequireDefault(require("../entities/GroupMenu"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class GroupMenuRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_GroupMenu.default);
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
    const [groupMenu, count] = await this.repo.createQueryBuilder('group_menu').skip(skip).take(take).where('group_menu.gme_status_s = :ref', {
      ref: status.id
    }).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: groupMenu
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
    const data = await this.repo.createQueryBuilder('group_menu').where('group_menu.gme_id_s <> :id and group_menu.gme_name_s = :name', {
      id,
      name
    }).getOne();
    return data;
  }
  async create(groupMenu) {
    const data = this.repo.save(groupMenu);
    return data;
  }
  async update(groupMenu) {
    await this.repo.save(groupMenu);
    return groupMenu;
  }
  async remove(groupMenu) {
    await this.repo.remove(groupMenu);
  }
}
exports.default = GroupMenuRepository;
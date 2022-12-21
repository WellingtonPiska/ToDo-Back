"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _Menu = _interopRequireDefault(require("../entities/Menu"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MenuRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_Menu.default);
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
    const [menu, count] = await this.repo.createQueryBuilder('menu').skip(skip).take(take).where('menu.men_status_s = :ref', {
      ref: status.id
    }).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: menu
    };
    return result;
  }
  async findById(id) {
    const data = await this.repo.find({
      where: {
        id
      },
      relations: ['child']
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
    const data = await this.repo.createQueryBuilder('menu').where('menu.men_id_s <> :id and menu.men_name_s = :name', {
      id,
      name
    }).getOne();
    return data;
  }
  async create(menu) {
    const data = await this.repo.save(menu);
    return data;
  }
  async update(menu) {
    await this.repo.save(menu);
    return menu;
  }
  async remove(menu) {
    await this.repo.remove(menu);
  }
}
exports.default = MenuRepository;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _MenuRoutes = _interopRequireDefault(require("../entities/MenuRoutes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MenuRoutesRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_MenuRoutes.default);
  }
  async findAll({
    page,
    skip,
    take
  }) {
    const [menu_routes, count] = await this.repo.createQueryBuilder('menu_routes').skip(skip).take(take).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: menu_routes
    };
    return result;
  }
  async findById(id) {
    const data = await this.repo.findOneBy({
      id
    });
    return data;
  }
  async findValidUpdate(id) {
    const data = await this.repo.createQueryBuilder('menu_routes').where('menu_routes.mro_id_s <> :id ', {
      id
    }).getOne();
    return data;
  }
  async create(menuRoutes) {
    const data = this.repo.save(menuRoutes);
    return data;
  }
  async update(menuRoutes) {
    await this.repo.save(menuRoutes);
    return menuRoutes;
  }
  async remove(menuRoutes) {
    await this.repo.remove(menuRoutes);
  }
}
exports.default = MenuRoutesRepository;
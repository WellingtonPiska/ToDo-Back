"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _Routes = _interopRequireDefault(require("../entities/Routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class RoutesRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_Routes.default);
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
    const [routes, count] = await this.repo.createQueryBuilder('routes').skip(skip).take(take).where('routes.rou_status_s = :ref', {
      ref: status.id
    }).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: routes
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
    const data = await this.repo.createQueryBuilder('routes').where('routes.rou_id_s <> :id ', {
      id
    }).getOne();
    return data;
  }
  async create(routes) {
    const data = this.repo.save(routes);
    return data;
  }
  async update(routes) {
    await this.repo.save(routes);
    return routes;
  }
  async remove(routes) {
    await this.repo.remove(routes);
  }
}
exports.default = RoutesRepository;
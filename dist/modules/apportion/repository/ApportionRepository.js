"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _Apportion = _interopRequireDefault(require("../entities/Apportion"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ApportionRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_Apportion.default);
  }
  async findAll({
    page,
    skip,
    take
  }) {
    const [apportion, count] = await this.repo.createQueryBuilder('apportion').skip(skip).take(take).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: apportion
    };
    return result;
  }
  async findById(id) {
    const data = await this.repo.findOneBy({
      id
    });
    return data;
  }
  async findValidUpdate(id, costCenter, apportion) {
    const data = await this.repo.createQueryBuilder('apportion').where('apportion.app_id_s <> :id and apportion.app_costcenter_s = :costCenter and apportion.app_apportion_s = :apportion', {
      id,
      costCenter,
      apportion
    }).getOne();
    return data;
  }
  async create(apportion) {
    const data = this.repo.save(apportion);
    return data;
  }
  async update(apportion) {
    await this.repo.save(apportion);
    return apportion;
  }
  async remove(apportion) {
    await this.repo.remove(apportion);
  }
}
exports.default = ApportionRepository;
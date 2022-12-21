"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _CostCenter = _interopRequireDefault(require("../entities/CostCenter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CostCenterRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_CostCenter.default);
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
    const [costCenter, count] = await this.repo.createQueryBuilder('cost_center').skip(skip).take(take).where('cost_center.cce_status_s = :ref', {
      ref: status.id
    }).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: costCenter
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
    const data = await this.repo.createQueryBuilder('cost_center').where('cost_center.cce_id_s <> :id and cost_center.cce_name_s = :name', {
      id,
      name
    }).getOne();
    return data;
  }
  async create(cost_center) {
    const data = this.repo.save(cost_center);
    return data;
  }
  async update(cost_center) {
    await this.repo.save(cost_center);
    return cost_center;
  }
  async remove(cost_center) {
    await this.repo.remove(cost_center);
  }
}
exports.default = CostCenterRepository;
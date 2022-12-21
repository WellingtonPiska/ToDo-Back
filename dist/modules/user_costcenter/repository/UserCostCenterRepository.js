"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _UserCostCenter = _interopRequireDefault(require("../entities/UserCostCenter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UserCostCenterRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_UserCostCenter.default);
  }
  async findAll({
    page,
    skip,
    take
  }) {
    const [user_cost_center, count] = await this.repo.createQueryBuilder('user_costcenter').skip(skip).take(take).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: user_cost_center
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
    const data = await this.repo.createQueryBuilder('user_costcenter').where('user_costcenter.ucc_id_s <> :id ', {
      id
    }).getOne();
    return data;
  }
  async create(userCostCenter) {
    const data = this.repo.save(userCostCenter);
    return data;
  }
  async update(userCostCenter) {
    await this.repo.save(userCostCenter);
    return userCostCenter;
  }
  async remove(userCostCenter) {
    await this.repo.remove(userCostCenter);
  }
}
exports.default = UserCostCenterRepository;
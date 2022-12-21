"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListCostCenter = void 0;
require("reflect-metadata");
var _CostCenterRepository = _interopRequireDefault(require("../repository/CostCenterRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListCostCenter {
  async execute({
    page,
    limit,
    ref
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _CostCenterRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take,
      ref
    });
    return list;
  }
}
exports.ServiceListCostCenter = ServiceListCostCenter;
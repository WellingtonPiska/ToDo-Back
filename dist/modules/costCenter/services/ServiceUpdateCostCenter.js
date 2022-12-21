"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateCostCenter = void 0;
var _CostCenterRepository = _interopRequireDefault(require("../repository/CostCenterRepository"));
var _ServiceFindCostCenter = require("./ServiceFindCostCenter");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateCostCenter {
  async execute({
    id,
    name,
    obs,
    apportion
  }) {
    const repo = new _CostCenterRepository.default();
    const serviceFindCostCenter = new _ServiceFindCostCenter.ServiceFindCostCenter();
    const costCenter = await serviceFindCostCenter.execute({
      id
    });
    const costCenterValid = await repo.findValidUpdate(id, name);
    if (costCenterValid) {
      throw new Error('CostCenter duplicado');
    }
    costCenter.apportion = apportion;
    costCenter.name = name;
    costCenter.obs = obs;
    await repo.update(costCenter);
    return costCenter;
  }
}
exports.ServiceUpdateCostCenter = ServiceUpdateCostCenter;
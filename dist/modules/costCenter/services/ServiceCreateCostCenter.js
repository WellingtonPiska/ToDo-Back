"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateCostCenter = void 0;
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _CostCenter = _interopRequireDefault(require("../entities/CostCenter"));
var _CostCenterRepository = _interopRequireDefault(require("../repository/CostCenterRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateCostCenter {
  async execute({
    name,
    obs,
    apportion
  }) {
    const repo = new _CostCenterRepository.default();
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({
      ref: 'A'
    });
    const costCenterValid = await repo.findByName(name);
    if (costCenterValid) {
      throw new Error('CostCenter já existe');
    }
    const cc = new _CostCenter.default();
    cc.name = name;
    cc.obs = obs;
    cc.status = statusRef.id;
    cc.apportion = apportion;
    const obj = await repo.create(cc);
    return obj;
  }
}
exports.ServiceCreateCostCenter = ServiceCreateCostCenter;
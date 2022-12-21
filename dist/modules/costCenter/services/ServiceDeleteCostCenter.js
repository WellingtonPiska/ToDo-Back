"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteCostCenter = void 0;
var _CostCenterRepository = _interopRequireDefault(require("../repository/CostCenterRepository"));
var _ServiceFindCostCenter = require("./ServiceFindCostCenter");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteCostCenter {
  async execute({
    id
  }) {
    const repo = new _CostCenterRepository.default();
    const serviceFindCosCenter = new _ServiceFindCostCenter.ServiceFindCostCenter();
    const profile = await serviceFindCosCenter.execute({
      id
    });
    await repo.remove(profile);
    return true;
  }
}
exports.ServiceDeleteCostCenter = ServiceDeleteCostCenter;
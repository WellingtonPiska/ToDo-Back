"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateUserCostCenter = void 0;
var _ServiceFindCostCenter = require("../../costCenter/services/ServiceFindCostCenter");
var _ServiceFindUser = require("../../user/services/ServiceFindUser");
var _UserCostCenter = _interopRequireDefault(require("../entities/UserCostCenter"));
var _UserCostCenterRepository = _interopRequireDefault(require("../repository/UserCostCenterRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateUserCostCenter {
  async execute({
    user,
    costCenter
  }) {
    const repo = new _UserCostCenterRepository.default();
    const serviceFindCostCenter = new _ServiceFindCostCenter.ServiceFindCostCenter();
    const CostCenterRef = await serviceFindCostCenter.execute({
      id: costCenter
    });
    const serviceFindUser = new _ServiceFindUser.ServiceFindUser();
    const userRef = await serviceFindUser.execute({
      id: user
    });
    const ucc = new _UserCostCenter.default();
    ucc.costCenter = CostCenterRef.id;
    ucc.user = userRef.id;
    const obj = await repo.create(ucc);
    return obj;
  }
}
exports.ServiceCreateUserCostCenter = ServiceCreateUserCostCenter;
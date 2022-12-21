"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateUserCostCenter = void 0;
var _ServiceFindCostCenter = require("../../costCenter/services/ServiceFindCostCenter");
var _ServiceFindUser = require("../../user/services/ServiceFindUser");
var _UserCostCenterRepository = _interopRequireDefault(require("../repository/UserCostCenterRepository"));
var _ServiceFindUserCostCenter = require("./ServiceFindUserCostCenter");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateUserCostCenter {
  async execute({
    id,
    user,
    costCenter
  }) {
    const repo = new _UserCostCenterRepository.default();
    const serviceFindUserCostCenter = new _ServiceFindUserCostCenter.ServiceFindUserCostCenter();
    const ucc = await serviceFindUserCostCenter.execute({
      id
    });
    const serviceFindCostCenter = new _ServiceFindCostCenter.ServiceFindCostCenter();
    const costCenterRef = await serviceFindCostCenter.execute({
      id: costCenter
    });
    const serviceFindUser = new _ServiceFindUser.ServiceFindUser();
    const userRef = await serviceFindUser.execute({
      id: user
    });
    ucc.user = userRef.id;
    ucc.costCenter = costCenterRef.id;
    ucc.id = id;
    await repo.update(ucc);
    return ucc;
  }
}
exports.ServiceUpdateUserCostCenter = ServiceUpdateUserCostCenter;
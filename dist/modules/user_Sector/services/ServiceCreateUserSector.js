"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateUserSector = void 0;
var _ServiceFindCostCenter = require("../../costCenter/services/ServiceFindCostCenter");
var _ServiceFindUser = require("../../user/services/ServiceFindUser");
var _UserSector = _interopRequireDefault(require("../entities/UserSector"));
var _UserSectorRepository = _interopRequireDefault(require("../repository/UserSectorRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateUserSector {
  async execute({
    user,
    costCenter
  }) {
    const repo = new _UserSectorRepository.default();
    const serviceFindCostCenter = new _ServiceFindCostCenter.ServiceFindCostCenter();
    const CostCenterRef = await serviceFindCostCenter.execute({
      id: costCenter
    });
    const serviceFindUser = new _ServiceFindUser.ServiceFindUser();
    const userRef = await serviceFindUser.execute({
      id: user
    });
    const ucc = new _UserSector.default();
    ucc.costCenter = CostCenterRef.id;
    ucc.user = userRef.id;
    const obj = await repo.create(ucc);
    return obj;
  }
}
exports.ServiceCreateUserSector = ServiceCreateUserSector;
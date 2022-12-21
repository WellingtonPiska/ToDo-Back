"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateUserSector = void 0;
var _ServiceFindCostCenter = require("../../costCenter/services/ServiceFindCostCenter");
var _ServiceFindUser = require("../../user/services/ServiceFindUser");
var _UserSectorRepository = _interopRequireDefault(require("../repository/UserSectorRepository"));
var _ServiceFindUserSector = require("./ServiceFindUserSector");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateUserSector {
  async execute({
    id,
    user,
    costCenter
  }) {
    const repo = new _UserSectorRepository.default();
    const serviceFindUserSector = new _ServiceFindUserSector.ServiceFindUserSector();
    const userSector = await serviceFindUserSector.execute({
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
    userSector.user = userRef.id;
    userSector.costCenter = costCenterRef.id;
    userSector.id = id;
    await repo.update(userSector);
    return userSector;
  }
}
exports.ServiceUpdateUserSector = ServiceUpdateUserSector;
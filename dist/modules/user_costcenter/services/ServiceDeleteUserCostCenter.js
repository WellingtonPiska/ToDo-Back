"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteUserCostCenter = void 0;
require("reflect-metadata");
var _database = require("../../../shared/database");
var _UserCostCenter = _interopRequireDefault(require("../entities/UserCostCenter"));
var _ServiceFindUserCostCenter = require("./ServiceFindUserCostCenter");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteUserCostCenter {
  async execute({
    id
  }) {
    const repo = _database.dataSource.getRepository(_UserCostCenter.default);
    const serviceFindUserCostCenter = new _ServiceFindUserCostCenter.ServiceFindUserCostCenter();
    const ucc = await serviceFindUserCostCenter.execute({
      id
    });
    await repo.delete({
      id: ucc.id
    });
    return true;
  }
}
exports.ServiceDeleteUserCostCenter = ServiceDeleteUserCostCenter;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindUserCostCenter = void 0;
require("reflect-metadata");
var _database = require("../../../shared/database");
var _UserCostCenter = _interopRequireDefault(require("../entities/UserCostCenter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindUserCostCenter {
  async execute({
    id
  }) {
    const repo = _database.dataSource.getRepository(_UserCostCenter.default);
    const data = await repo.findOneBy({
      id
    });
    if (!data) {
      throw new Error('Registro não encontrado.');
    }
    return data;
  }
}
exports.ServiceFindUserCostCenter = ServiceFindUserCostCenter;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteUserSector = void 0;
require("reflect-metadata");
var _database = require("../../../shared/database");
var _UserSector = _interopRequireDefault(require("../entities/UserSector"));
var _ServiceFindUserSector = require("./ServiceFindUserSector");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteUserSector {
  async execute({
    id
  }) {
    const repo = _database.dataSource.getRepository(_UserSector.default);
    const serviceFindUserSector = new _ServiceFindUserSector.ServiceFindUserSector();
    const ucc = await serviceFindUserSector.execute({
      id
    });
    await repo.delete({
      id: ucc.id
    });
    return true;
  }
}
exports.ServiceDeleteUserSector = ServiceDeleteUserSector;
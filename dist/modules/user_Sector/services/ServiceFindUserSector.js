"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindUserSector = void 0;
require("reflect-metadata");
var _database = require("../../../shared/database");
var _UserSector = _interopRequireDefault(require("../entities/UserSector"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindUserSector {
  async execute({
    id
  }) {
    const repo = _database.dataSource.getRepository(_UserSector.default);
    const data = await repo.findOneBy({
      id
    });
    if (!data) {
      throw new Error('Registro não encontrado.');
    }
    return data;
  }
}
exports.ServiceFindUserSector = ServiceFindUserSector;
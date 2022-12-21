"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteSector = void 0;
require("reflect-metadata");
var _database = require("../../../shared/database");
var _Sector = _interopRequireDefault(require("../entities/Sector"));
var _ServiceFindSector = require("./ServiceFindSector");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteSector {
  async execute({
    id
  }) {
    const repo = _database.dataSource.getRepository(_Sector.default);
    const serviceFindSector = new _ServiceFindSector.ServiceFindSector();
    const sector = await serviceFindSector.execute({
      id
    });
    await repo.delete({
      id: sector.id
    });
    return true;
  }
}
exports.ServiceDeleteSector = ServiceDeleteSector;
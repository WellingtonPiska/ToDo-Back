"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteMenuRoutes = void 0;
require("reflect-metadata");
var _database = require("../../../shared/database");
var _MenuRoutes = _interopRequireDefault(require("../entities/MenuRoutes"));
var _ServiceFindMenuRoutes = require("./ServiceFindMenuRoutes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteMenuRoutes {
  async execute({
    id
  }) {
    const repo = _database.dataSource.getRepository(_MenuRoutes.default);
    const serviceFindMenuRoutes = new _ServiceFindMenuRoutes.ServiceFindMenuRoutes();
    const ucc = await serviceFindMenuRoutes.execute({
      id
    });
    await repo.delete({
      id: ucc.id
    });
    return true;
  }
}
exports.ServiceDeleteMenuRoutes = ServiceDeleteMenuRoutes;
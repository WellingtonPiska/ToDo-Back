"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteUser = void 0;
require("reflect-metadata");
var _database = require("../../../shared/database");
var _User = _interopRequireDefault(require("../entities/User"));
var _ServiceFindUser = require("./ServiceFindUser");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteUser {
  async execute({
    id
  }) {
    const repo = _database.dataSource.getRepository(_User.default);
    const serviceFindUser = new _ServiceFindUser.ServiceFindUser();
    const user = await serviceFindUser.execute({
      id
    });
    await repo.delete({
      id: user.id
    });
    return true;
  }
}
exports.ServiceDeleteUser = ServiceDeleteUser;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServicePutAvatar = void 0;
var _index = require("../../../shared/database/index");
require("reflect-metadata");
var _User = _interopRequireDefault(require("../entities/User"));
var _ServiceFindUser = require("./ServiceFindUser");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServicePutAvatar {
  async execute({
    id,
    avatar
  }) {
    const repo = _index.dataSource.getRepository(_User.default);
    const serviceFindUser = new _ServiceFindUser.ServiceFindUser();
    const ava = await serviceFindUser.execute({
      id
    });
    ava.avatar = avatar;
    const obj = await repo.save(ava);
    return obj;
  }
}
exports.ServicePutAvatar = ServicePutAvatar;
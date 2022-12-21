"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateGroup = void 0;
var _GroupRepository = _interopRequireDefault(require("../repository/GroupRepository"));
var _ServiceFindGroup = require("./ServiceFindGroup");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateGroup {
  async execute({
    id,
    name,
    type,
    mail,
    dn,
    sid,
    sync
  }) {
    const repo = new _GroupRepository.default();
    const serviceFindGroup = new _ServiceFindGroup.ServiceFindGroup();
    const group = await serviceFindGroup.execute({
      id
    });
    const groupValid = await repo.findValidUpdate(id, name);
    if (groupValid) {
      throw new Error('Group duplicado');
    }
    group.name = name;
    group.type = type;
    group.mail = mail;
    group.dn = dn;
    group.sid = sid;
    group.sync = sync;
    await repo.update(group);
    return group;
  }
}
exports.ServiceUpdateGroup = ServiceUpdateGroup;
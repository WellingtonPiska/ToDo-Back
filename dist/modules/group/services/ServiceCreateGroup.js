"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateGroup = void 0;
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _Group = _interopRequireDefault(require("../entities/Group"));
var _GroupRepository = _interopRequireDefault(require("../repository/GroupRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateGroup {
  async execute({
    name,
    type,
    mail,
    dn,
    sid,
    sync
  }) {
    const repo = new _GroupRepository.default();
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({
      ref: 'A'
    });
    const groupValid = await repo.findByName(name);
    if (groupValid) {
      throw new Error('Group já existe');
    }
    const gro = new _Group.default();
    gro.name = name;
    gro.status = statusRef.id;
    gro.type = type;
    gro.mail = mail;
    gro.dn = dn;
    gro.sid = sid;
    gro.sync = sync;
    const obj = await repo.create(gro);
    return obj;
  }
}
exports.ServiceCreateGroup = ServiceCreateGroup;
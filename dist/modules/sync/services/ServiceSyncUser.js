"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceSyncUser = void 0;
require("dotenv/config");
var _uuid = require("uuid");
var _ldap = _interopRequireDefault(require("../../../config/axios/ldap"));
var _ProfileRepository = _interopRequireDefault(require("../../profile/repository/ProfileRepository"));
var _SectorRepository = _interopRequireDefault(require("../../sector/repository/SectorRepository"));
var _StatusRepository = _interopRequireDefault(require("../../status/repository/StatusRepository"));
var _User = _interopRequireDefault(require("../../user/entities/User"));
var _UserRepository = _interopRequireDefault(require("../../user/repository/UserRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import SectorRepository from '../../sector/repository/SectorRepository';

class ServiceSyncUser {
  async execute() {
    const repo = new _UserRepository.default();
    const repoSector = new _SectorRepository.default();
    const repoStatus = new _StatusRepository.default();
    const dataStatus = await repoStatus.findByRef('A');
    const sync = (0, _uuid.v4)();
    if (!dataStatus) {
      throw Error('Status não cadastrado');
    }
    const list = await repoSector.findAllByType('S', dataStatus.id);
    for (const {
      id,
      dn
    } of list) {
      const param = {
        ou: dn,
        subou: true
      };
      const res = await _ldap.default.post('/ldap/user/list', param);
      if (res.status == 200) {
        for (const usr of res.data) {
          const user = await repo.findBySid(usr.objectSid);
          if (user) {
            user.name = usr.givenName;
            user.lastName = usr.sn;
            user.display = usr.displayName;
            user.login = usr.sAMAccountName;
            user.mail = usr.mail;
            user.sync = sync;
            user.sector = id;
            user.status = dataStatus.id;
            await repo.update(user);
          } else {
            const userValid = await repo.findValidSyncUser(usr.sAMAccountName);
            if (!userValid) {
              const repoProfile = new _ProfileRepository.default();
              const profile = await repoProfile.findByName('Usuarios');
              if (!profile) {
                throw new Error('Profile não encontrado');
              }
              const add = new _User.default();
              add.name = usr.givenName;
              add.lastName = usr.sn;
              add.display = usr.displayName;
              add.login = usr.sAMAccountName;
              add.sid = usr.objectSid;
              add.mail = usr.mail;
              add.sync = sync;
              add.sector = id;
              add.status = dataStatus.id;
              add.profile = profile.id;
              await repo.create(add);
            }
          }
        }
      }
    }
    const remove = await repo.findNotSyncUser(sync);
    console.log(remove);
    if (remove) {
      for (const rem of remove) {
        const remStatus = await repoStatus.findByRef('I');
        if (remStatus) {
          rem.status = remStatus?.id;
          await repo.update(rem);
        }
      }
    }
  }
}
exports.ServiceSyncUser = ServiceSyncUser;
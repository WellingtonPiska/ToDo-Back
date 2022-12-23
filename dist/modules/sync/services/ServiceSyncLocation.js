"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceSyncLocation = void 0;
require("dotenv/config");
var _uuid = require("uuid");
var _ldap = _interopRequireDefault(require("../../../config/axios/ldap"));
var _Sector = _interopRequireDefault(require("../../sector/entities/Sector"));
var _SectorRepository = _interopRequireDefault(require("../../sector/repository/SectorRepository"));
var _StatusRepository = _interopRequireDefault(require("../../status/repository/StatusRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceSyncLocation {
  async execute() {
    try {
      const param = {
        ou: 'OU=Locais,OU=Administracao-TI,DC=hcampodoro,DC=com,DC=br',
        subou: false
      };
      const sync = (0, _uuid.v4)();
      const res = await _ldap.default.post('/ldap/ou/list', param);
      if (res.status === 200) {
        const repo = new _SectorRepository.default();
        const repoStatus = new _StatusRepository.default();
        const obs = 'Registro adicionado pela sincronização.';
        const type = 'L';
        const dataStatus = await repoStatus.findByRef('A');
        if (!dataStatus) {
          throw Error('Status não cadastrado');
        }
        for (const {
          name,
          distinguishedName,
          objectGUID
        } of res.data) {
          const sector = await repo.findByGuid(objectGUID);
          if (sector) {
            // UPDATE
            sector.name = name;
            sector.dn = distinguishedName;
            sector.sync = sync;
            await repo.update(sector);
          } else {
            // INSERT
            const sectorValid = await repo.findValidSyncLocation(name);
            if (!sectorValid) {
              const add = new _Sector.default();
              add.name = name;
              add.obs = obs;
              add.type = type;
              add.status = dataStatus.id;
              add.dn = distinguishedName;
              add.guid = objectGUID;
              add.sync = sync;
              await repo.create(add);
            }
          }
        }
        const remove = await repo.findNotSyncLocaton(sync);
        if (remove) {
          for (const rem of remove) {
            const remStatus = await repoStatus.findByRef('I');
            if (remStatus) {
              rem.status = remStatus?.id;
              await repo.update(rem);
            }
          }
        }
      } else {
        throw new Error('Erro na sincronização de locais.');
      }
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
}
exports.ServiceSyncLocation = ServiceSyncLocation;
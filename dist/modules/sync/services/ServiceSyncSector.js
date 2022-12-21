"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceSyncSector = void 0;
require("dotenv/config");
var _uuid = require("uuid");
var _ldap = _interopRequireDefault(require("../../../config/axios/ldap"));
var _Sector = _interopRequireDefault(require("../../sector/entities/Sector"));
var _SectorRepository = _interopRequireDefault(require("../../sector/repository/SectorRepository"));
var _StatusRepository = _interopRequireDefault(require("../../status/repository/StatusRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceSyncSector {
  async execute() {
    const repo = new _SectorRepository.default();
    const repoStatus = new _StatusRepository.default();
    const dataStatus = await repoStatus.findByRef('A');
    const obs = 'Registro adicionado pela sincronização.';
    const type = 'S';
    const sync = (0, _uuid.v4)();
    if (!dataStatus) {
      throw Error('Status não cadastrado');
    }
    const list = await repo.findAllByType('L', dataStatus.id);
    for (const {
      id,
      dn
    } of list) {
      const fatherId = id;
      const param = {
        ou: dn,
        subou: false
      };
      const res = await _ldap.default.post('/ldap/ou/list', param);
      if (res.status == 200) {
        for (const {
          name,
          distinguishedName,
          objectGUID
        } of res.data) {
          const sector = await repo.findByGuid(objectGUID);
          if (sector) {
            sector.name = name;
            sector.dn = distinguishedName;
            sector.sync = sync;
            await repo.update(sector);
          } else {
            const sectorValid = await repo.findValidSyncSector(name, fatherId);
            if (!sectorValid) {
              const add = new _Sector.default();
              add.name = name;
              add.obs = obs;
              add.type = type;
              add.status = dataStatus.id;
              add.sectorFather = fatherId;
              add.dn = distinguishedName;
              add.guid = objectGUID;
              add.sync = sync;
              await repo.create(add);
            }
          }
        }
      } else {
        throw Error('Erro na sincronização de setores.');
      }
    }
    const remove = await repo.findNotSyncSector(sync);
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
exports.ServiceSyncSector = ServiceSyncSector;
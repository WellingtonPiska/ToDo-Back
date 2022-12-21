"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateSector = void 0;
var _ServiceFindCostCenter = require("../../costCenter/services/ServiceFindCostCenter");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _Sector = _interopRequireDefault(require("../entities/Sector"));
var _SectorRepository = _interopRequireDefault(require("../repository/SectorRepository"));
var _ServiceFindSector = require("./ServiceFindSector");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateSector {
  async execute({
    name,
    obs,
    type,
    dn,
    guid,
    sectorFather,
    costCenter
  }) {
    const repo = new _SectorRepository.default();
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({
      ref: 'A'
    });
    let sectorFatherRef = null;
    if (sectorFather) {
      const serviceFindSector = new _ServiceFindSector.ServiceFindSector();
      sectorFatherRef = await serviceFindSector.execute({
        id: sectorFather
      });
    }
    let costCenterRef = null;
    if (costCenter) {
      const serviceFindCostCenter = new _ServiceFindCostCenter.ServiceFindCostCenter();
      costCenterRef = await serviceFindCostCenter.execute({
        id: costCenter
      });
    }
    const sectorValid = await repo.findByName(name);
    if (sectorValid) {
      throw new Error('Sector já existe');
    }
    const sector = new _Sector.default();
    sector.type = type;
    sector.dn = dn;
    sector.guid = guid;
    sector.name = name;
    sector.obs = obs;
    sector.costCenter = costCenterRef?.id;
    sector.sectorFather = sectorFatherRef?.id;
    sector.status = statusRef.id;
    const obj = await repo.create(sector);
    return obj;
  }
}
exports.ServiceCreateSector = ServiceCreateSector;
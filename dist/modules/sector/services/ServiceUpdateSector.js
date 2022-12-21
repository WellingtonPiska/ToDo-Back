"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateSector = void 0;
var _ServiceFindCostCenter = require("../../costCenter/services/ServiceFindCostCenter");
var _SectorRepository = _interopRequireDefault(require("../repository/SectorRepository"));
var _ServiceFindSector = require("./ServiceFindSector");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateSector {
  async execute({
    id,
    name,
    obs,
    type,
    dn,
    guid,
    sectorFather,
    costCenter
  }) {
    const repo = new _SectorRepository.default();
    const serviceFindSector = new _ServiceFindSector.ServiceFindSector();
    const sector = await serviceFindSector.execute({
      id
    });
    let costCenterRef = null;
    if (costCenter) {
      const serviceFindCostCenter = new _ServiceFindCostCenter.ServiceFindCostCenter();
      costCenterRef = await serviceFindCostCenter.execute({
        id: costCenter
      });
    }
    let sectorFatherRef = null;
    if (sectorFather) {
      const serviceFindSector = new _ServiceFindSector.ServiceFindSector();
      sectorFatherRef = await serviceFindSector.execute({
        id: sectorFather
      });
    }
    const sectorValid = await repo.findValidUpdate(id, name);
    if (sectorValid) {
      throw new Error('Sector duplicado');
    }
    sector.dn = dn;
    sector.guid = guid;
    sector.type = type;
    sector.name = name;
    sector.obs = obs;
    sector.costCenter = costCenterRef?.id;
    sector.sectorFather = sectorFatherRef?.id;
    await repo.update(sector);
    return sector;
  }
}
exports.ServiceUpdateSector = ServiceUpdateSector;
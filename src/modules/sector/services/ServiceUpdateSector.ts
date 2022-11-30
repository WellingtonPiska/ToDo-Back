import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import Sector from '../entities/Sector';
import SectorRepository from '../repository/SectorRepository';
import { ServiceFindSector } from './ServiceFindSector';

interface IUpdateSector {
  id: string;
  name: string;
  obs: string;
  type: string;
  dn?: string;
  guid?: string;
  status: string;
  sectorFather?: string;
  costCenter?: string;
}

export class ServiceUpdateSector {
  async execute({ id, name, obs, type, dn, guid, status, sectorFather, costCenter }: IUpdateSector): Promise<Sector> {
    const repo = new SectorRepository();

    const serviceFindSector = new ServiceFindSector();
    const sector = await serviceFindSector.execute({ id });

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    let costCenterRef = null
    if (costCenter) {
      const serviceFindCostCenter = new ServiceFindCostCenter();
      costCenterRef = await serviceFindCostCenter.execute({ id: costCenter });
    }

    let sectorFatherRef = null
    if (sectorFather) {
      const serviceFindSector = new ServiceFindSector();
      sectorFatherRef = await serviceFindSector.execute({ id: sectorFather });
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
    sector.status = statusRef.id
    sector.sectorFather = sectorFatherRef?.id;

    await repo.update(sector);
    return sector;
  }
}

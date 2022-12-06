import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import Sector from '../entities/Sector';
import SectorRepository from '../repository/SectorRepository';
import { ServiceFindSector } from './ServiceFindSector';

type ICreateSector = {
  name: string;
  obs: string;
  type: string;
  dn?: string;
  guid?: string;
  status: string;
  sectorFather?: string;
  costCenter?: string;
};

export class ServiceCreateSector {
  async execute({
    name,
    obs,
    type,
    dn,
    guid,
    status,
    sectorFather,
    costCenter,
  }: ICreateSector): Promise<Sector> {
    const repo = new SectorRepository();

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    let sectorFatherRef = null;
    if (sectorFather) {
      const serviceFindSector = new ServiceFindSector();
      sectorFatherRef = await serviceFindSector.execute({ id: sectorFather });
    }

    let costCenterRef = null;
    if (costCenter) {
      const serviceFindCostCenter = new ServiceFindCostCenter();
      costCenterRef = await serviceFindCostCenter.execute({ id: costCenter });
    }

    const sectorValid = await repo.findByName(name);

    if (sectorValid) {
      throw new Error('Sector já existe');
    }

    const sector = new Sector();
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

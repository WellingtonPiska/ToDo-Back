import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import Sector from '../entities/Sector';
import { ServiceFindSector } from './ServiceFindSector';

interface ICreateSector {
  name: string;
  obs: string;
  type: string;
  dn?: string;
  guid?: string;
  status: string;
  sectorFather?: string;
  costCenter?: string;
}

export class ServiceCreateSector {
  async execute({
    name,
    obs,
    status,
    dn,
    guid,
    type,
    sectorFather,
    costCenter,
  }: ICreateSector): Promise<Sector> {
    const repo = dataSource.getRepository(Sector);

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    let costCenterRef = null;
    if (costCenter) {
      const serviceFindCostCenter = new ServiceFindCostCenter();
      costCenterRef = await serviceFindCostCenter.execute({
        id: costCenter,
      });
    }

    let sectorFatherRef = null;
    if (sectorFather) {
      const serviceFindSector = new ServiceFindSector();
      sectorFatherRef = await serviceFindSector.execute({ id: sectorFather });
    }

    const placeValid = await repo
      .createQueryBuilder('sector')
      .where('sector.sec_name_s = :name and sector.sec_type_s = :type', {
        name,
        type,
      })
      .getOne();

    if (placeValid) {
      throw new Error('Duplicate register');
    }

    const sector = new Sector();
    sector.name = name;
    sector.obs = obs;
    sector.type = type;
    sector.status = statusRef.id;
    sector.costCenter = costCenterRef?.id;
    sector.sectorFather = sectorFatherRef?.id;
    sector.dn = dn;
    sector.guid = guid;
    const obj = await repo.save(sector);

    return obj;
  }
}

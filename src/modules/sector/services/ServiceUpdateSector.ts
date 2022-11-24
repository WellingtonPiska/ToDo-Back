import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import { default as Place, default as Sector } from '../entities/Sector';
import { ServiceFindSector } from './ServiceFindSector';

interface IUpdatePlace {
  id: string;
  name: string;
  obs: string;
  dn?: string;
  guid?: string;
  status: string;
  sectorFather?: string;
  costCenter: string;
  type: string;
}

export class ServiceUpdateSector {
  async execute({ id, name, obs, dn, status, guid, sectorFather, costCenter, type }: IUpdatePlace): Promise<Sector> {
    const repo = dataSource.getRepository(Place);

    const serviceFindSector = new ServiceFindSector();
    const sector = await serviceFindSector.execute({ id });

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const costCenterRef = await serviceFindCostCenter.execute({ id: costCenter });

    let sectorFatherRef = null
    if (sectorFather) {
      const serviceFindSector = new ServiceFindSector();
      sectorFatherRef = await serviceFindSector.execute({ id: sectorFather });
    }

    const placeValid = await repo
      .createQueryBuilder('sector')
      .where(
        'sector.sec_id_s <> :id and (sector.sec_name_s = :name and sector.sec_type_s = :type )',
        {
          id,
          name,
          type,
        }
      )
      .getOne();

    if (placeValid) {
      throw new Error('Duplicate register');
    }

    const obj = await repo.save({
      id: sector.id,
      status: statusRef.id,
      placeFather: sectorFatherRef?.id,
      costCenter: costCenterRef.id,
      name,
      obs,
      type,
      guid,
      dn
    });
    return obj;
  }
}

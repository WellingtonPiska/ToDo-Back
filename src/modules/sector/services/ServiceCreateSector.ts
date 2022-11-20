import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import Place from '../entities/Sector';
import { ServiceFindSector } from './ServiceFindSector';

interface ICreateSector {
  name: string;
  obs: string;
  type: string;
  dn?: string;
  guid?: string;
  status: string;
  sectorFather?: string;
  costCenter: string;
}

export class ServiceCreateSector {
  async execute({ name, dn, obs, status, guid, type, sectorFather, costCenter }: ICreateSector): Promise<Place> {
    const repo = dataSource.getRepository(Place);

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
      .where('place.pla_name_s = :name and place.pla_type_s = :type', {
        name,
        type
      })
      .getOne();

    if (placeValid) {
      throw new Error('Duplicate register');
    }

    const place = new Place();
    place.name = name;
    place.obs = obs;
    place.type = type;
    place.status = statusRef.id;
    place.costCenter = costCenterRef.id;
    place.sectorFather = sectorFatherRef?.id;
    place.dn = dn;
    place.guid = guid;
    const obj = await repo.save(place);

    return obj;
  }
}

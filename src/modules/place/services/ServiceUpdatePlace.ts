import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import Place from '../entities/Place';
import { ServiceFindPlace } from './ServiceFindPlace';

interface IUpdatePlace {
  id: string;
  name: string;
  obs: string;
  dn?: string;
  guid?: string;
  status: string;
  placeFather?: string;
  costCenter: string;
  type: string;
}

export class ServiceUpdatePlace {
  async execute({ id, name, obs, dn, status, guid, placeFather, costCenter, type }: IUpdatePlace) {
    const repo = dataSource.getRepository(Place);
    const serviceFindPlace = new ServiceFindPlace();
    const place = await serviceFindPlace.execute({ id });

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const costCenterRef = await serviceFindCostCenter.execute({ id: costCenter });

    let placeFatherRef = null
    if (placeFather) {
      const serviceFindPlace = new ServiceFindPlace();
      placeFatherRef = await serviceFindPlace.execute({ id: placeFather });
    }

    const placeValid = await repo
      .createQueryBuilder('place')
      .where(
        'place.pla_id_s <> :id and (place.pla_name_s = :name and place.pla_type_s = :type )',
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
      id: place.id,
      status: statusRef.id,
      placeFather: placeFatherRef?.id,
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

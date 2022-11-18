import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import Place from '../entities/Place';
import { ServiceFindPlace } from './ServiceFindPlace';

interface ICreatePlace {
  name: string;
  obs: string;
  type: string;
  dn?: string;
  guid?: string;
  status: string;
  placeFather?: string;
  costCenter: string;
}

export class ServiceCreatePlace {
  async execute({ name, dn, obs, status, guid, type, placeFather, costCenter }: ICreatePlace): Promise<Place> {
    const repo = dataSource.getRepository(Place);

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
    place.placeFather = placeFatherRef?.id;
    place.dn = dn;
    place.guid = guid;
    const obj = await repo.save(place);

    return obj;
  }
}

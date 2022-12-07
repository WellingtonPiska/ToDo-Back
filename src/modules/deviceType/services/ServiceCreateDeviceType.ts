import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import DeviceType from '../entities/DeviceType';
import DeviceTypeRepository from '../repository/DeviceTypeRepository';

type ICreateDeviceType = {
  name: string;
  cost: string;
  obs?: string;
};

export class ServiceCreateDeviceType {
  async execute({ name, cost, obs }: ICreateDeviceType): Promise<DeviceType> {
    const repo = new DeviceTypeRepository();

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({ ref: 'A' });

    const deviceTypeValid = await repo.findByName(name);

    if (deviceTypeValid) {
      throw new Error('ContactType já existe');
    }

    const dty = new DeviceType();
    dty.status = statusRef.id;
    dty.name = name;
    dty.cost = cost;
    dty.obs = obs;

    const obj = await repo.create(dty);

    return obj;
  }
}

import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import DeviceType from '../entities/DeviceType';
import DeviceTypeRepository from '../repository/DeviceTypeRepository';

type ICreateDeviceType = {
  name: string;
  status: string;
  cost: string;
  obs?: string;
};

export class ServiceCreateDeviceType {
  async execute({
    name,
    status,
    cost,
    obs,
  }: ICreateDeviceType): Promise<DeviceType> {
    const repo = new DeviceTypeRepository();

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    const deviceTypeValid = await repo.findByName(name);

    if (deviceTypeValid) {
      throw new Error('ContactType já existe');
    }

    const dty = new DeviceType();
    dty.name = name;
    dty.status = statusRef.id;
    dty.cost = cost;
    dty.obs = obs;

    const obj = await repo.create(dty);

    return obj;
  }
}

import DeviceType from '../entities/DeviceType';
import DeviceTypeRepository from '../repository/DeviceTypeRepository';
import { ServiceFindDeviceType } from './ServiceFindDeviceType';

type IUpdateDeviceType = {
  id: string;
  name: string;
  cost: string;
  obs?: string;
};

export class ServiceUpdateDeviceType {
  async execute({
    id,
    name,
    cost,
    obs,
  }: IUpdateDeviceType): Promise<DeviceType> {
    const repo = new DeviceTypeRepository();

    const serviceFindDeviceType = new ServiceFindDeviceType();
    const deviceType = await serviceFindDeviceType.execute({ id });

    const contactTypeValid = await repo.findValidUpdate(id, name);

    if (contactTypeValid) {
      throw new Error('contactType duplicado');
    }

    deviceType.name = name;
    deviceType.cost = cost;
    deviceType.obs = obs;

    await repo.update(deviceType);
    return deviceType;
  }
}

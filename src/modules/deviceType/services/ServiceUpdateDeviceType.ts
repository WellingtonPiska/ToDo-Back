import DeviceType from '../entities/DeviceType';
import DeviceTypeRepository from '../repository/DeviceTypeRepository';
import { ServiceFindDeviceType } from './ServiceFindDeviceType';

type IUpdateDeviceType = {
  id: string;
  name: string;
  obs?: string;
};

export class ServiceUpdateDeviceType {
  async execute({ id, name, obs }: IUpdateDeviceType): Promise<DeviceType> {
    const repo = new DeviceTypeRepository();

    const serviceFindDeviceType = new ServiceFindDeviceType();
    const deviceType = await serviceFindDeviceType.execute({ id });

    const contactTypeValid = await repo.findValidUpdate(id, name);

    if (contactTypeValid) {
      throw new Error('contactType duplicado');
    }

    deviceType.name = name;
    deviceType.obs = obs;

    await repo.update(deviceType);
    return deviceType;
  }
}

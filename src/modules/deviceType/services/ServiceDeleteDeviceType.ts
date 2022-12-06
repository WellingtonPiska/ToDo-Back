import DeviceTypeRepository from '../repository/DeviceTypeRepository';
import { ServiceFindDeviceType } from './ServiceFindDeviceType';

type IDeleteDeviceType = {
  id: string;
};

export class ServiceDeleteDeviceType {
  async execute({ id }: IDeleteDeviceType): Promise<boolean> {
    const repo = new DeviceTypeRepository();
    const serviceFindDeviceType = new ServiceFindDeviceType();
    const deviceType = await serviceFindDeviceType.execute({ id });
    await repo.remove(deviceType);
    return true;
  }
}

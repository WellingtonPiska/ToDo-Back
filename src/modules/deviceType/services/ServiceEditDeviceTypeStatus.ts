import { dataSource } from '../../../shared/database/index';
import 'reflect-metadata';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import DeviceType from '../entities/DeviceType';
import { ServiceFindDeviceType } from './ServiceFindDeviceType';

type IPutEditStatusDeviceType = {
  id: string;
  ref: string;
};

export class ServiceEditStatusDeviceType {
  async execute({ id, ref }: IPutEditStatusDeviceType) {
    const repo = dataSource.getRepository(DeviceType);

    const serviceFindDeviceType = new ServiceFindDeviceType();
    const deviceType = await serviceFindDeviceType.execute({ id });

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });

    deviceType.status = status.id;

    const obj = await repo.save(deviceType);
    return obj;
  }
}

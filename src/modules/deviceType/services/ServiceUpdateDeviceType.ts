import { ServiceFindStatus } from "../../status/services/ServiceFindStatus";
import DeviceType from "../entities/DeviceType";
import DeviceTypeRepository from "../repository/DeviceTypeRepository";
import { ServiceFindDeviceType } from "./ServiceFindDeviceType";

interface IUpdateDeviceType {
  id: string;
  name: string;
  status: string;
  cost: string;
  obs?: string;
}

export class ServiceUpdateDeviceType {
  async execute({ id, name, status, cost, obs }: IUpdateDeviceType): Promise<DeviceType> {
    const repo = new DeviceTypeRepository();

    const serviceFindDeviceType = new ServiceFindDeviceType();
    const deviceType = await serviceFindDeviceType.execute({ id });

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    const contactTypeValid = await repo.findValidUpdate(id, name);

    if (contactTypeValid) {
      throw new Error('contactType duplicado');
    }

    deviceType.name = name;
    deviceType.status = statusRef.id;
    deviceType.cost = cost;
    deviceType.obs = obs;

    await repo.update(deviceType);
    return deviceType;
  }
}


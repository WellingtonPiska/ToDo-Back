import DeviceTypeRepository from "../repository/DeviceTypeRepository";

interface IFindDeviceType {
  id: string;
}

export class ServiceFindDeviceType {
  async execute({ id }: IFindDeviceType) {
    const repo = new DeviceTypeRepository();

    const data = await repo.findById(id)

    if (!data) {
      throw new Error('DeviceType não encontrado')
    }
    return data;
  }
}

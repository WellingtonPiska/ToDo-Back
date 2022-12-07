import { ServiceFindCompany } from '../../company/services/ServiceFindCompany';
import { ServiceFindDeviceType } from '../../deviceType/services/ServiceFindDeviceType';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Model from '../entities/Model';
import ModelRepository from '../repository/ModelRepository';

type ICreateModel = {
  name: string;
  description?: string;
  company: string;
  deviceType: string;
};

export class ServiceCreateModel {
  async execute({
    name,
    description,
    company,
    deviceType,
  }: ICreateModel): Promise<Model> {
    const repo = new ModelRepository();

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({ ref: 'A' });

    const serviceFindDeviceType = new ServiceFindDeviceType();
    const deviceTypeRef = await serviceFindDeviceType.execute({
      id: deviceType,
    });

    const serviceFindCompany = new ServiceFindCompany();
    const companyRef = await serviceFindCompany.execute({ id: company });

    const modelValid = await repo.findByName(name);

    if (modelValid) {
      throw new Error('Model já existe');
    }

    const mod = new Model();
    mod.name = name;
    mod.description = description;
    mod.status = statusRef.id;
    mod.company = companyRef.id;
    mod.deviceType = deviceTypeRef.id;
    const obj = await repo.create(mod);

    return obj;
  }
}

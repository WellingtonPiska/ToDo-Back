import { ServiceFindCompany } from '../../company/services/ServiceFindCompany';
import { ServiceFindDeviceType } from '../../deviceType/services/ServiceFindDeviceType';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import Model from '../entities/Model';
import ModelRepository from '../repository/ModelRepository';
import { ServiceFindModel } from './ServiceFindModel';

type IUpdateModel = {
  id: string;
  name: string;
  status: string;
  company: string;
  deviceType: string;
  description?: string;
};

export class ServiceUpdateModel {
  async execute({
    id,
    name,
    company,
    deviceType,
    status,
    description,
  }: IUpdateModel): Promise<Model> {
    const repo = new ModelRepository();

    const serviceFindModel = new ServiceFindModel();
    const model = await serviceFindModel.execute({ id });

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    const serviceFindCompany = new ServiceFindCompany();
    const companyRef = await serviceFindCompany.execute({ id: company });

    const serviceFindDeviceType = new ServiceFindDeviceType();
    const deviceTypeRef = await serviceFindDeviceType.execute({
      id: deviceType,
    });

    const modelValid = await repo.findValidUpdate(id, name);

    if (modelValid) {
      throw new Error('Model duplicado');
    }
    model.company = companyRef.id;
    model.name = name;
    model.description = description;
    model.deviceType = deviceTypeRef.id;
    model.status = statusRef.id;
    await repo.update(model);
    return model;
  }
}

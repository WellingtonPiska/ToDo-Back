import { dataSource } from '../../../shared/database/index';
import 'reflect-metadata';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Company from '../entities/Company';
import { ServiceFindCompany } from './ServiceFindCompany';

type IPutEditStatusCompany = {
  id: string;
  ref: string;
};

export class ServiceEditStatusCompany {
  async execute({ id, ref }: IPutEditStatusCompany) {
    const repo = dataSource.getRepository(Company);

    const serviceFindCompany = new ServiceFindCompany();
    const company = await serviceFindCompany.execute({ id });

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });

    company.status = status.id;

    const obj = await repo.save(company);
    return obj;
  }
}

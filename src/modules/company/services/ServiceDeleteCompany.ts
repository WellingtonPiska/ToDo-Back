import CompanyRepository from '../repository/CompanyRepository';
import { ServiceFindCompany } from './ServiceFindCompany';

type IDeleteCompany = {
  id: string;
};

export class ServiceDeleteCompany {
  async execute({ id }: IDeleteCompany): Promise<boolean> {
    const repo = new CompanyRepository();
    const serviceFindCompany = new ServiceFindCompany();
    const company = await serviceFindCompany.execute({ id });
    await repo.remove(company);
    return true;
  }
}

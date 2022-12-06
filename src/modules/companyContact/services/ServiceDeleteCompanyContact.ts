import CompanyContactRepository from '../repository/CompanyContactRepository';
import { ServiceFindCompanyContact } from './ServiceFindCompanyContact';

type IDeleteCompanyContact = {
  id: string;
  company: string;
};

export class ServiceDeleteCompanyContact {
  async execute({ id, company }: IDeleteCompanyContact): Promise<boolean> {
    const repo = new CompanyContactRepository();
    const serviceFindCompanyContact = new ServiceFindCompanyContact();
    const companyContact = await serviceFindCompanyContact.execute({
      id,
      company,
    });
    await repo.remove(companyContact);
    return true;
  }
}


import CompanyContactRepository from "../repository/CompanyContactRepository";
import { ServiceFindCompanyContact } from "./ServiceFindCompanyContact";

interface IDeleteCompanyContact {
  id: string;
  company: string;
}

export class ServiceDeleteCompanyContact {
  async execute({ id, company }: IDeleteCompanyContact): Promise<Boolean> {
    const repo = new CompanyContactRepository();
    const serviceFindCompanyContact = new ServiceFindCompanyContact();
    const companyContact = await serviceFindCompanyContact.execute({ id, company });
    await repo.remove(companyContact);
    return true;
  }
}

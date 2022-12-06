import { ServiceFindCompany } from '../../company/services/ServiceFindCompany';
import { ServiceFindContactType } from '../../contactType/services/ServiceFindContactType';
import CompanyContact from '../entities/CompanyContact';
import CompanyContactRepository from '../repository/CompanyContactRepository';

export type ICreateCompanyContact = {
  name: string;
  contactType: string;
  mail: string;
  phone: string;
  mobile: string;
  company: string;
};

export class ServiceCreateCompanyContact {
  async execute({
    name,
    contactType,
    mail,
    phone,
    mobile,
    company,
  }: ICreateCompanyContact): Promise<CompanyContact> {
    const repo = new CompanyContactRepository();

    const serviceFindContactType = new ServiceFindContactType();
    const contactTypeRef = await serviceFindContactType.execute({
      id: contactType,
    });

    const serviceFindCompany = new ServiceFindCompany();
    const companyRef = await serviceFindCompany.execute({ id: company });

    const companyContactValid = await repo.findByName(name);

    if (companyContactValid) {
      throw new Error('CompanyContact já existe');
    }

    const cco = new CompanyContact();
    cco.name = name;
    cco.company = companyRef.id;
    cco.contactType = contactTypeRef.id;
    cco.mail = mail;
    cco.phone = phone;
    cco.mobile = mobile;

    const obj = await repo.create(cco);

    return obj;
  }
}

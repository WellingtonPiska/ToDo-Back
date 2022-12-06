import { ServiceFindCompany } from '../../company/services/ServiceFindCompany';
import { ServiceFindContactType } from '../../contactType/services/ServiceFindContactType';
import CompanyContact from '../entities/CompanyContact';
import CompanyContactRepository from '../repository/CompanyContactRepository';
import { ServiceFindCompanyContact } from './ServiceFindCompanyContact';

type IUpdateCompanyContact = {
  id: string;
  name: string;
  mail: string;
  phone: string;
  mobile: string;
  company: string;
  contactType: string;
};

export class ServiceUpdateCompanyContact {
  async execute({
    id,
    name,
    mail,
    phone,
    mobile,
    company,
    contactType,
  }: IUpdateCompanyContact): Promise<CompanyContact> {
    const repo = new CompanyContactRepository();

    const serviceFindCompanyContact = new ServiceFindCompanyContact();
    const companyC = await serviceFindCompanyContact.execute({ id, company });

    const serviceFindCompany = new ServiceFindCompany();
    const companyRef = await serviceFindCompany.execute({ id: company });

    const serviceFindContactType = new ServiceFindContactType();
    const contactTypeRef = await serviceFindContactType.execute({
      id: contactType,
    });

    const companyValid = await repo.findValidUpdate(id, name);

    if (companyValid) {
      throw new Error('company duplicado');
    }

    companyC.company = companyRef.id;
    companyC.contactType = contactTypeRef.id;
    companyC.name = name;
    companyC.mail = mail;
    companyC.phone = phone;
    companyC.mobile = mobile;

    await repo.update(companyC);
    return companyC;
  }
}

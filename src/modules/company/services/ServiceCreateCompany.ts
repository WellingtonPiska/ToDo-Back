import CompanyContact from '../../companyContact/entities/CompanyContact';
import { ICreateCompanyContact } from '../../companyContact/services/ServiceCreateCompanyContact';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Company from '../entities/Company';
import CompanyRepository from '../repository/CompanyRepository';

type ICreateCompany = {
  name: string;
  fantasy: string;
  type: string;
  inscription: string;
  zipCode?: string;
  street?: string;
  complement?: string;
  number?: string;
  district?: string;
  city?: string;
  state?: string;
  contacts?: ICreateCompanyContact[];
};

export class ServiceCreateCompany {
  async execute({
    name,
    fantasy,
    type,
    inscription,
    zipCode,
    street,
    complement,
    number,
    district,
    city,
    state,
    contacts,
  }: ICreateCompany): Promise<Company> {
    const repo = new CompanyRepository();

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({ ref: 'A' });

    const companyValid = await repo.findByName(name);

    if (companyValid) {
      throw new Error('Company já existe');
    }

    const com = new Company();
    com.name = name;
    com.status = statusRef.id;
    com.fantasy = fantasy;
    com.type = type;
    com.inscription = inscription;
    com.zipCode = zipCode;
    com.street = street;
    com.complement = complement;
    com.number = number;
    com.district = district;
    com.city = city;
    com.state = state;

    const contactsCompany: CompanyContact[] = [];

    if (contacts) {
      // eslint-disable-next-line no-restricted-syntax
      for await (const contact of contacts) {
        const contactCompany = new CompanyContact();
        contactCompany.name = contact.name;
        contactCompany.contactType = contact.contactType;
        contactCompany.mail = contact.mail;
        contactCompany.phone = contact.phone;
        contactCompany.mobile = contact.mobile;
        contactsCompany.push(contactCompany);
      }
    }

    const obj = await repo.create(com, contactsCompany);

    return obj;
  }
}

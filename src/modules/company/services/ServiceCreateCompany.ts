import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import Company from '../entities/Company';
import CompanyRepository from '../repository/CompanyRepository';

type ICreateCompany = {
  name: string;
  status: string;
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
};

export class ServiceCreateCompany {
  async execute({
    name,
    status,
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
  }: ICreateCompany): Promise<Company> {
    const repo = new CompanyRepository();

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

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
    const obj = await repo.create(com);

    return obj;
  }
}

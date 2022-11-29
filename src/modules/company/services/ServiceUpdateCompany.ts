import { ServiceFindStatus } from "../../status/services/ServiceFindStatus";
import Company from "../entities/Company";
import CompanyRepository from "../repository/CompanyRepository";
import { ServiceFindCompany } from "./ServiceFindCompany";

interface IUpdateCompany {
  id: string;
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
}

export class ServiceUpdateCompany {
  async execute({ id, name, status, fantasy, type, inscription, zipCode, street, complement, number, district, city, state
  }: IUpdateCompany): Promise<Company> {
    const repo = new CompanyRepository();

    const serviceFindCompany = new ServiceFindCompany();
    const company = await serviceFindCompany.execute({ id });

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    const companyValid = await repo.findValidUpdate(id, name);

    if (companyValid) {
      throw new Error('company duplicado');
    }
    company.name = name;
    company.status = statusRef.id;
    company.fantasy = fantasy;
    company.type = type;
    company.inscription = inscription;
    company.zipCode = zipCode;
    company.street = street;
    company.complement = complement;
    company.number = number;
    company.district = district;
    company.city = city;
    company.state = state;

    await repo.update(company);
    return company;
  }
}


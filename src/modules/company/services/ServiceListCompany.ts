import 'reflect-metadata';
import Company from '../entities/Company';
import CompanyRepository from "../repository/CompanyRepository";


interface ISearchParams {
  page: number;
  limit: number;
  ref: string;
  search?: string;
}

interface IResponseCompany {
  per_page: number;
  total: number;
  current_page: number;
  data: Company[];
}

export class ServiceListCompany {
  async execute({ page, limit, ref, search }: ISearchParams): Promise<IResponseCompany> {
    const take = limit;
    const skip = (Number(page) - 1) * take;


    const repo = new CompanyRepository();

    const list = await repo.findAll({ page, skip, take, ref, search })

    return list;
  }
}


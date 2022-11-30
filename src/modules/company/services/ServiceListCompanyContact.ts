import CompanyContact from '../entities/CompanyContact';
import CompanyContactRepository from '../repository/CompanyContactRepository';

interface ISearchParams {
  company: string;
  page: number;
  limit: number;
  search?: string;
}

interface IResponseCompanyContact {
  per_page: number;
  total: number;
  current_page: number;
  data: CompanyContact[];
}

export class ServiceListCompanyContact {
  async execute({
    company,
    page,
    limit,
    search,
  }: ISearchParams): Promise<IResponseCompanyContact> {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new CompanyContactRepository();
    const list = await repo.findAll({ company, page, skip, take, search });
    return list;
  }
}

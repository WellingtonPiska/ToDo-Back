import 'reflect-metadata';
import CostCenter from '../entities/CostCenter';
import CostCenterRepository from '../repository/CostCenterRepository';

type ISearchParams = {
  page: number;
  limit: number;
  ref: string;
  search?: string;
};

type IResponseCostCenter = {
  per_page: number;
  total: number;
  current_page: number;
  data: CostCenter[];
};

export class ServiceListCostCenter {
  async execute({
    page,
    limit,
    ref,
    search,
  }: ISearchParams): Promise<IResponseCostCenter> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new CostCenterRepository();
    const list = await repo.findAll({ page, skip, take, ref, search });
    return list;
  }
}

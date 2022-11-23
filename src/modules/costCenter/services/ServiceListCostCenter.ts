import 'reflect-metadata';
import CostCenter from '../entities/CostCenter';
import CostCenterRepository from '../repository/CostCenterRepository';

interface ISearchParams {
  page: number;
  limit: number;
  ref: string;
}

interface IResponseCostCenter {
  per_page: number;
  total: number;
  current_page: number;
  data: CostCenter[];
}

export class ServiceListCostCenter {
  async execute({ page, limit, ref }: ISearchParams): Promise<IResponseCostCenter> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new CostCenterRepository();
    const list = await repo.findAll({ page, skip, take, ref })
    return list;
  }
}


import 'reflect-metadata';
import UserCostCenter from '../entities/UserCostCenter';
import UserCostCenterRepository from '../repository/UserCostCenterRepository';

type ISearchParams = {
  page: number;
  limit: number;
};

type IResponseUserCostCenter = {
  per_page: number;
  total: number;
  current_page: number;
  data: UserCostCenter[];
};

export class ServiceListUserCostCenter {
  async execute({
    page,
    limit,
  }: ISearchParams): Promise<IResponseUserCostCenter> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new UserCostCenterRepository();
    const list = await repo.findAll({ page, skip, take });
    return list;
  }
}

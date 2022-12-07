import 'reflect-metadata';
import Routes from '../entities/Routes';
import RoutesRepository from '../repository/RoutesRepository';

type ISearchParams = {
  page: number;
  limit: number;
  ref: string;
};

type IResponseRoutes = {
  per_page: number;
  total: number;
  current_page: number;
  data: Routes[];
};

export class ServiceListRoutes {
  async execute({ page, limit, ref }: ISearchParams): Promise<IResponseRoutes> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new RoutesRepository();
    const list = await repo.findAll({ page, skip, take, ref });
    return list;
  }
}

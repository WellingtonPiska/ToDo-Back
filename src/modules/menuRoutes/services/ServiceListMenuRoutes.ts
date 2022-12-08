import 'reflect-metadata';
import MenuRoutes from '../entities/MenuRoutes';
import MenuRoutesRepository from '../repository/MenuRoutesRepository';

type ISearchParams = {
  page: number;
  limit: number;
};

type IResponseMenuRoutes = {
  per_page: number;
  total: number;
  current_page: number;
  data: MenuRoutes[];
};

export class ServiceListMenuRoutes {
  async execute({ page, limit }: ISearchParams): Promise<IResponseMenuRoutes> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new MenuRoutesRepository();
    const list = await repo.findAll({ page, skip, take });
    return list;
  }
}

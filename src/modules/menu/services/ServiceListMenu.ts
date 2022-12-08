import 'reflect-metadata';
import Menu from '../entities/Menu';
import MenuRepository from '../repository/MenuRepository';

type ISearchParams = {
  page: number;
  limit: number;
  ref: string;
};

type IResponseMenu = {
  per_page: number;
  total: number;
  current_page: number;
  data: Menu[];
};

export class ServiceListMenu {
  async execute({ page, limit, ref }: ISearchParams): Promise<IResponseMenu> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new MenuRepository();
    const list = await repo.findAll({ page, skip, take, ref });
    return list;
  }
}

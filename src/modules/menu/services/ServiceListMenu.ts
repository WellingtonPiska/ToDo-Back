import Menu from '../entities/Menu';
import MenuRepository from '../repository/MenuRepository';

type SearchParams = {
  page: number;
  limit: number;
};

type IResponseMenu = {
  per_page: number;
  total: number;
  current_page: number;
  data: Menu[];
};

export class ServiceListMenu {
  async execute({ page, limit }: SearchParams): Promise<IResponseMenu> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new MenuRepository();

    const list = await repo.findAll({
      page,
      skip,
      take,
    });
    return list;
  }
}

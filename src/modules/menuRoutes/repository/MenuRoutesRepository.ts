import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import MenuRoutes from '../entities/MenuRoutes';

type ISearchParams = {
  page: number;
  skip: number;
  take: number;
  search?: string;
};

type IResponseMenuRoutes = {
  per_page: number;
  total: number;
  current_page: number;
  data: MenuRoutes[];
};

export default class MenuRoutesRepository {
  private repo: Repository<MenuRoutes>;

  constructor() {
    this.repo = dataSource.getRepository(MenuRoutes);
  }
  public async findAll({
    page,
    skip,
    take,
  }: ISearchParams): Promise<IResponseMenuRoutes> {
    const [menu_routes, count] = await this.repo
      .createQueryBuilder('menu_routes')
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: menu_routes,
    };
    return result;
  }
  public async findById(id: string): Promise<MenuRoutes | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findValidUpdate(id: string): Promise<MenuRoutes | null> {
    const data = await this.repo
      .createQueryBuilder('menu_routes')
      .where('menu_routes.mro_id_s <> :id ', {
        id,
      })
      .getOne();

    return data;
  }

  public async create(menuRoutes: MenuRoutes): Promise<MenuRoutes> {
    const data = this.repo.save(menuRoutes);
    return data;
  }

  public async update(menuRoutes: MenuRoutes): Promise<MenuRoutes> {
    await this.repo.save(menuRoutes);
    return menuRoutes;
  }

  public async remove(menuRoutes: MenuRoutes): Promise<void> {
    await this.repo.remove(menuRoutes);
  }
}

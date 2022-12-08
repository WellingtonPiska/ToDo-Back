import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Menu from '../entities/Menu';

type ISearchParams = {
  page: number;
  skip: number;
  take: number;
  ref: string;
};

type IResponseMenu = {
  per_page: number;
  total: number;
  current_page: number;
  data: Menu[];
};

export default class MenuRepository {
  private repo: Repository<Menu>;

  constructor() {
    this.repo = dataSource.getRepository(Menu);
  }

  public async findAll({
    page,
    skip,
    take,
    ref,
  }: ISearchParams): Promise<IResponseMenu> {
    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });

    const [menu, count] = await this.repo
      .createQueryBuilder('menu')
      .skip(skip)
      .take(take)
      .where('menu.men_status_s = :ref', { ref: status.id })
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: menu,
    };

    return result;
  }

  public async findById(id: string): Promise<Menu | null> {
    const data = await this.repo.find({
      where: {
        id,
      },
      relations: ['child'],
    });
    if (data.length > 0) {
      return data[0];
    }
    return null;
  }

  public async findByName(name: string): Promise<Menu | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findValidUpdate(id: string, name: string): Promise<Menu | null> {
    const data = await this.repo
      .createQueryBuilder('menu')
      .where('menu.men_id_s <> :id and menu.men_name_s = :name', {
        id,
        name,
      })
      .getOne();

    return data;
  }

  public async create(menu: Menu): Promise<Menu> {
    const data = await this.repo.save(menu);
    return data;
  }

  public async update(menu: Menu): Promise<Menu> {
    await this.repo.save(menu);
    return menu;
  }

  public async remove(menu: Menu): Promise<void> {
    await this.repo.remove(menu);
  }
}

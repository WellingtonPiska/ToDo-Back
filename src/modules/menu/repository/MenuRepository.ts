import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/database';
import Menu from '../entities/Menu';

interface ISearchParams {
  page: number;
  skip: number;
  take: number;
}

interface IResponseMenu {
  per_page: number;
  total: number;
  current_page: number;
  data: Menu[];
}

interface ICreateMenu {
  name: string;
}

export default class MenuRepository {
  private repo: Repository<Menu>;

  constructor() {
    this.repo = dataSource.getRepository(Menu);
  }

  public async findAll({
    page,
    skip,
    take,
  }: ISearchParams): Promise<IResponseMenu> {
    const [menu, count] = await this.repo
      .createQueryBuilder()
      .skip(skip)
      .take(take)
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
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findByName(name: string): Promise<Menu | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }



  public async findValid(
    name: string,
  ): Promise<Menu | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string,
  ): Promise<Menu | null> {
    const data = await this.repo
      .createQueryBuilder('menu')
      .where(
        'menu.men_id_s <> :id and menu.men_name_s = :name',
        {
          id,
          name,
        }
      )
      .getOne();

    return data;
  }

  public async create(menu: Menu): Promise<Menu> {
    const data = this.repo.create(menu);
    await this.repo.save(menu);
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

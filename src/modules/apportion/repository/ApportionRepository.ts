import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import Apportion from '../entities/Apportion';

type ISearchParams = {
  page: number;
  skip: number;
  take: number;
};

type IResponseApportion = {
  per_page: number;
  total: number;
  current_page: number;
  data: Apportion[];
};

export default class ProfileRepository {
  private repo: Repository<Apportion>;

  constructor() {
    this.repo = dataSource.getRepository(Apportion);
  }

  public async findAll({
    page,
    skip,
    take,
  }: ISearchParams): Promise<IResponseApportion> {
    const [apportion, count] = await this.repo
      .createQueryBuilder('apportion')
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: apportion,
    };

    return result;
  }

  public async findById(id: string): Promise<Apportion | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    costCenter: string,
    apportion: string
  ): Promise<Apportion | null> {
    const data = await this.repo
      .createQueryBuilder('apportion')
      .where(
        'apportion.app_id_s <> :id and apportion.app_costcenter_s = :costCenter and apportion.app_apportion_s = :apportion',
        {
          id,
          costCenter,
          apportion,
        }
      )
      .getOne();

    return data;
  }

  public async create(apportion: Apportion): Promise<Apportion> {
    const data = this.repo.save(apportion);
    return data;
  }

  public async update(apportion: Apportion): Promise<Apportion> {
    await this.repo.save(apportion);
    return apportion;
  }

  public async remove(apportion: Apportion): Promise<void> {
    await this.repo.remove(apportion);
  }
}

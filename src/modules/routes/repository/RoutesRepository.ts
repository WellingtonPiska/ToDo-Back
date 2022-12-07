import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Routes from '../entities/Routes';

type ISearchParams = {
  page: number;
  skip: number;
  take: number;
  ref: string;
};

type IResponseRoutes = {
  per_page: number;
  total: number;
  current_page: number;
  data: Routes[];
};

export default class RoutesRepository {
  private repo: Repository<Routes>;

  constructor() {
    this.repo = dataSource.getRepository(Routes);
  }

  public async findAll({
    page,
    skip,
    take,
    ref,
  }: ISearchParams): Promise<IResponseRoutes> {
    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });
    const [routes, count] = await this.repo
      .createQueryBuilder('routes')
      .skip(skip)
      .take(take)
      .where('routes.rou_status_s = :ref', { ref: status.id })
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: routes,
    };

    return result;
  }

  public async findById(id: string): Promise<Routes | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findValidUpdate(id: string): Promise<Routes | null> {
    const data = await this.repo
      .createQueryBuilder('routes')
      .where('routes.rou_id_s <> :id ', {
        id,
      })
      .getOne();

    return data;
  }

  public async create(routes: Routes): Promise<Routes> {
    const data = this.repo.save(routes);
    return data;
  }

  public async update(routes: Routes): Promise<Routes> {
    await this.repo.save(routes);
    return routes;
  }

  public async remove(routes: Routes): Promise<void> {
    await this.repo.remove(routes);
  }
}

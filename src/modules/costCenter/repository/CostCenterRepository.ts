import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import CostCenter from '../entities/CostCenter';

type ISearchParams = {
  page: number;
  skip: number;
  take: number;
  ref: string;
  search?: string;
};

type IResponseCostCenter = {
  per_page: number;
  total: number;
  current_page: number;
  data: CostCenter[];
};

export default class CostCenterRepository {
  private repo: Repository<CostCenter>;

  constructor() {
    this.repo = dataSource.getRepository(CostCenter);
  }

  public async findAll({
    page,
    skip,
    take,
    ref,
    search,
  }: ISearchParams): Promise<IResponseCostCenter> {
    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });
    const [costCenter, count] = await this.repo
      .createQueryBuilder('cost_center')
      .skip(skip)
      .take(take)
      .where(qb => {
        if (search !== undefined) {
          qb.where(
            `cost_center.cce_status_s = :ref and  LOWER(cost_center.cce_name_s) like :search`,
            { ref: status.id, search: `%${search}%` }
          );
        } else {
          qb.where(`cost_center.cce_status_s = :ref `, { ref: status.id });
        }
      })
      .orderBy('cost_center.cce_name_s')
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: costCenter,
    };

    return result;
  }

  public async findById(id: string): Promise<CostCenter | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findByName(name: string): Promise<CostCenter | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string
  ): Promise<CostCenter | null> {
    const data = await this.repo
      .createQueryBuilder('cost_center')
      .where('cost_center.cce_id_s <> :id and cost_center.cce_name_s = :name', {
        id,
        name,
      })
      .getOne();

    return data;
  }

  public async create(cost_center: CostCenter): Promise<CostCenter> {
    const data = this.repo.save(cost_center);
    return data;
  }

  public async update(cost_center: CostCenter): Promise<CostCenter> {
    await this.repo.save(cost_center);
    return cost_center;
  }

  public async remove(cost_center: CostCenter): Promise<void> {
    await this.repo.remove(cost_center);
  }
}

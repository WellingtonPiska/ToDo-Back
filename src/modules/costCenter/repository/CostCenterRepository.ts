import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/database';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import CostCenter from '../entities/CostCenter';

interface ISearchParams {
  page: number;
  skip: number;
  take: number;
  ref: string;
}

interface IResponseCostCenter {
  per_page: number;
  total: number;
  current_page: number;
  data: CostCenter[];
}

interface ICreateCostCenter {
  name: string;
  status: string;
  apportion: string;
  obs?: string;
}

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
  }: ISearchParams): Promise<IResponseCostCenter> {
    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });
    const [costCenter, count] = await this.repo
      .createQueryBuilder('cost_center')
      .skip(skip)
      .take(take)
      .where('cost_center.cce_status_s = :ref', { ref: status.id })
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
    name: string,
  ): Promise<CostCenter | null> {
    const data = await this.repo
      .createQueryBuilder('cost_center')
      .where(
        'cost_center.cce_id_s <> :id and cost_center.cce_name_s = :name',
        {
          id,
          name,
        }
      )
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

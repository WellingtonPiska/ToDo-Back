import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/database';
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
  apportion: string;
  obs: string;
  status: string;
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
  }: ISearchParams): Promise<IResponseCostCenter> {
    const [cost_center, count] = await this.repo
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: cost_center,
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
      .createQueryBuilder('profile')
      .where(
        'cost_center.pro_id_s <> :id and cost_center.pro_name_s = :name',
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

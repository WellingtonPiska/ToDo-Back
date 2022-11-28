import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/database';
import UserCostCenter from '../entities/UserCostCenter';


interface ICreateUserCostCenter {
  user: string;
  costCenter: string;
}

interface ISearchParams {
  page: number;
  skip: number;
  take: number;
}

interface IResponseUseCostCenter {
  per_page: number;
  total: number;
  current_page: number;
  data: UserCostCenter[];
}

export default class UserCostCenterRepository {
  private repo: Repository<UserCostCenter>;

  constructor() {
    this.repo = dataSource.getRepository(UserCostCenter);
  }
  public async findAll({
    page,
    skip,
    take,
  }: ISearchParams): Promise<IResponseUseCostCenter> {
    const [cost_center, count] = await this.repo
      .createQueryBuilder('user_costcenter')
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
  public async findById(id: string): Promise<UserCostCenter | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }



  public async findValidUpdate(
    id: string,
  ): Promise<UserCostCenter | null> {
    const data = await this.repo
      .createQueryBuilder('user_costcenter')
      .where(
        'user_costcenter.ucc_id_s <> :id ',
        {
          id,
        }
      )
      .getOne();

    return data;
  }

  public async create(userCostCenter: UserCostCenter): Promise<UserCostCenter> {
    const data = this.repo.save(userCostCenter);
    return data;
  }

  public async update(userCostCenter: UserCostCenter): Promise<UserCostCenter> {
    await this.repo.save(userCostCenter);
    return userCostCenter;
  }

  public async remove(userCostCenter: UserCostCenter): Promise<void> {
    await this.repo.remove(userCostCenter);
  }
}

import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/database';
import UserSector from '../entities/UserSector';


interface ICreateUserSector {
  user: string;
  costCenter: string;
}

interface ISearchParams {
  page: number;
  skip: number;
  take: number;
}

interface IResponseUserSector {
  per_page: number;
  total: number;
  current_page: number;
  data: UserSector[];
}

export default class UserSectorRepository {
  private repo: Repository<UserSector>;

  constructor() {
    this.repo = dataSource.getRepository(UserSector);
  }
  public async findAll({
    page,
    skip,
    take,
  }: ISearchParams): Promise<IResponseUserSector> {
    const [user_sector, count] = await this.repo
      .createQueryBuilder('user_sector')
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: user_sector,
    };
    return result;
  }
  public async findById(id: string): Promise<UserSector | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }



  public async findValidUpdate(
    id: string,
  ): Promise<UserSector | null> {
    const data = await this.repo
      .createQueryBuilder('user_sector')
      .where(
        'user_sector.use_id_s <> :id ',
        {
          id,
        }
      )
      .getOne();

    return data;
  }

  public async create(user_sector: UserSector): Promise<UserSector> {
    const data = this.repo.save(user_sector);
    return data;
  }

  public async update(user_sector: UserSector): Promise<UserSector> {
    await this.repo.save(user_sector);
    return user_sector;
  }

  public async remove(user_sector: UserSector): Promise<void> {
    await this.repo.remove(user_sector);
  }
}

import { Not, Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import User from '../entities/User';

type ISearchParams = {
  page: number;
  skip: number;
  take: number;
  search?: string;
  select: boolean;
};

type IResponseUser = {
  per_page: number;
  total: number;
  current_page: number;
  data: User[];
};

export default class UserRepository {
  private repo: Repository<User>;

  constructor() {
    this.repo = dataSource.getRepository(User);
  }

  public async findAll({
    page,
    skip,
    search,
    take,
    select,
  }: ISearchParams): Promise<IResponseUser> {
    const [user, count] = await this.repo
      .createQueryBuilder('user')
      .skip(!select ? skip : undefined)
      .take(!select ? take : undefined)
      .where(qb => {
        if (search !== undefined) {
          qb.where(`LOWER(user.use_name_s) like :search`);
        }
      })
      .orderBy('user.use_name_s')
      .getManyAndCount();

    const result = {
      per_page: !select ? take : 0,
      total: count,
      current_page: !select ? page : 1,
      data: user,
    };

    return result;
  }

  public async findById(id: string): Promise<User | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findByName(name: string): Promise<User | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findByLogin(login: string): Promise<User | null> {
    const data = await this.repo.findOneBy({
      login,
    });
    return data;
  }

  public async findByMail(mail: string): Promise<User | null> {
    const data = await this.repo.findOneBy({
      mail,
    });
    return data;
  }

  async findByNameAndId(name: string, id: string): Promise<User | null> {
    const data = await this.repo.findOne({
      where: {
        name,
        id: Not(id),
      },
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    login: string,
    mail: string
  ): Promise<User | null> {
    const data = await this.repo
      .createQueryBuilder('user')
      .where(
        'user.use_id_s <> :id and (user.use_login_s = :login OR user.use_mail_s = :mail)',
        {
          id,
          mail,
          login,
        }
      )
      .getOne();

    return data;
  }

  async save(data: User): Promise<User> {
    return this.repo.save(data);
  }

  async remove(data: User): Promise<void> {
    await this.repo.remove(data);
  }
}

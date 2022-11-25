import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/database';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import User from '../entities/User';

interface ISearchParams {
  page: number;
  skip: number;
  take: number;
  ref: string;
}

interface IResponseUser {
  per_page: number;
  total: number;
  current_page: number;
  data: User[];
}

interface ICreateUser {
  name: string;
  lastName: string;
  display: string;
  login: string;
  password?: string;
  cpf?: string;
  mail?: string;
  dn?: string;
  sid?: string;
  status: string;
  sector: string;
  costCenter?: string;
  profile: string;
}

export default class UserRepository {
  private repo: Repository<User>;

  constructor() {
    this.repo = dataSource.getRepository(User);
  }

  public async findAll({
    page,
    skip,
    take,
    ref,
  }: ISearchParams): Promise<IResponseUser> {
    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });
    const [user, count] = await this.repo
      .createQueryBuilder('user')
      .skip(skip)
      .take(take)
      .where('user.use_status_s = :ref', { ref: status.id })
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
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

  public async findValidUpdate(
    id: string,
    name: string,
  ): Promise<User | null> {
    const data = await this.repo
      .createQueryBuilder('user')
      .where(
        'user.use_id_s <> :id and user.use_name_s = :name',
        {
          id,
          name,
        }
      )
      .getOne();

    return data;
  }

  public async create(user: User): Promise<User> {
    const data = this.repo.save(user);
    return data;
  }

  public async update(user: User): Promise<User> {
    await this.repo.save(user);
    return user;
  }

  public async remove(user: User): Promise<void> {
    await this.repo.remove(user);
  }
}

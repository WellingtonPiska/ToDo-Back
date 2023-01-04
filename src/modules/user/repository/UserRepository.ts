import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import User from '../entities/User';

export default class UserRepository {
  private repo: Repository<User>;

  constructor() {
    this.repo = dataSource.getRepository(User);
  }

  public async findAll(): Promise<User[]> {
    const result = await this.repo.find();
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

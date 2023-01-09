import 'reflect-metadata';
import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import Authentication from '../entities/Authentication';

export default class AuthenticationRepository {
  private repo: Repository<Authentication>;

  constructor() {
    this.repo = dataSource.getRepository(Authentication);
  }

  public async findAll(): Promise<Authentication[]> {
    const result = await this.repo.find();
    return result;
  }

  public async findById(id: string): Promise<Authentication | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findValidUpdate(user: string): Promise<Authentication | null> {
    const data = await this.repo
      .createQueryBuilder('authentication')
      .where('authentication.aut_user_s <> :user ', {
        user,
      })
      .getOne();

    return data;
  }

  public async create(authentication: Authentication): Promise<Authentication> {
    const data = this.repo.create(authentication);
    await this.repo.save(authentication);
    return data;
  }

  public async update(authentication: Authentication): Promise<Authentication> {
    await this.repo.save(authentication);
    return authentication;
  }

  public async remove(authentication: Authentication): Promise<void> {
    await this.repo.remove(authentication);
  }
}

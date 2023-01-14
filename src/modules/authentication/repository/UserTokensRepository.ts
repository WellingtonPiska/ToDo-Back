import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import UserTokens from '../entities/UserTokens';

export default class UserTokensRepository {
  private repository: Repository<UserTokens>;
  constructor() {
    this.repository = dataSource.getRepository(UserTokens);
  }

  async create({
    expiresDate,
    refreshToken,
    user,
  }: UserTokens): Promise<UserTokens> {
    const userToken = this.repository.create({
      expiresDate,
      refreshToken,
      user,
    });
    await this.repository.save(userToken);
    return userToken;
  }

  async findByUserId(user: string, token: string): Promise<UserTokens | null> {
    const userToken = await this.repository.findOneBy({
      user,
      refreshToken: token,
    });
    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete({
      id,
    });
  }
}

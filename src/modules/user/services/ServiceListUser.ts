import User from '../entities/User';
import UserRepository from '../repository/UserRepository';

export class ServiceListUser {
  async execute(): Promise<User[]> {
    const repo = new UserRepository();
    const list = await repo.findAll();

    return list;
  }
}

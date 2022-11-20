import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import User from '../entities/User';

export class ServiceListUser {

  async execute() {
    const repo = dataSource.getRepository(User);
    const data = await repo.find();
    return data;
  }
}

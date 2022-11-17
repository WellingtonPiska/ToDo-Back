import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Profile from '../entities/Status';




export class ServiceListProfile {
  async execute() {
    const repo = dataSource.getRepository(Profile);
    const profile = await repo.find();
    return profile;
  }
}

import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Status from '../entities/Status';

export class ServiceListStatus {
  async execute() {
    const repo = dataSource.getRepository(Status);
    const status = await repo.find();
    return status;
  }
}

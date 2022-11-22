import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Apportion from '../entities/Apportion';





export class ServiceListApportion {
  async execute() {
    const repo = dataSource.getRepository(Apportion);
    const apportion = await repo.find();
    return apportion;
  }
}

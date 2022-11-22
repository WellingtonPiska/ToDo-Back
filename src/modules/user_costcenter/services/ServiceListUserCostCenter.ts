import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import UserCostCenter from '../entities/UserCostCenter';


export class ServiceListUserCostCenter {

  async execute() {
    const repo = dataSource.getRepository(UserCostCenter);
    const data = await repo.find();
    return data;
  }
}

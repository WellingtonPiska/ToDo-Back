import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import User_CostCenter from '../entities/User_CostCenter';


export class ServiceListUserCostCenter {

  async execute() {
    const repo = dataSource.getRepository(User_CostCenter);
    const data = await repo.find();
    return data;
  }
}

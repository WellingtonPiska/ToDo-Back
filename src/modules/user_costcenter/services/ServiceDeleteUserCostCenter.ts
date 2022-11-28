import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import UserCostCenter from '../entities/UserCostCenter';
import { ServiceFindUserCostCenter } from './ServiceFindUserCostCenter';


interface IDeleteUserCostCenter {
  id: string;
}

export class ServiceDeleteUserCostCenter {
  async execute({ id }: IDeleteUserCostCenter): Promise<Boolean> {
    const repo = dataSource.getRepository(UserCostCenter);
    const serviceFindUserCostCenter = new ServiceFindUserCostCenter();
    const ucc = await serviceFindUserCostCenter.execute({ id });
    await repo.delete({ id: ucc.id });
    return true;
  }
}

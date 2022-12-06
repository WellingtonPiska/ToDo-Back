import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import UserCostCenter from '../entities/UserCostCenter';

type IFindUserCostCenter = {
  id: string;
};

export class ServiceFindUserCostCenter {
  async execute({ id }: IFindUserCostCenter) {
    const repo = dataSource.getRepository(UserCostCenter);
    const data = await repo.findOneBy({ id });

    if (!data) {
      throw new Error('Registro não encontrado.');
    }

    return data;
  }
}

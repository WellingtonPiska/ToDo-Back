import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import UserCostCenter from '../entities/UserCostCenter';


interface IDeleteUserCostCenter {
  id: string;
}

export class ServiceDeleteUserCostCenter {
  async execute({ id }: IDeleteUserCostCenter) {
    const repo = dataSource.getRepository(UserCostCenter);

    const data = await repo.findOneBy({ id });

    if (!data) {
      throw new Error('Registro não encontrado.');
    }

    await repo.delete({ id });

    return { "message": "Registro excluído." };
  }
}

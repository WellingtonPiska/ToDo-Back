import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import User from '../entities/User';


interface IDeleteUser {
  id: string;
}

export class ServiceDeleteUser {
  async execute({ id }: IDeleteUser) {
    const repo = dataSource.getRepository(User);

    const data = await repo.findOneBy({ id });

    if (!data) {
      throw new Error('Registro não encontrado.');
    }

    await repo.delete({ id });

    return { "message": "Registro excluído." };
  }
}

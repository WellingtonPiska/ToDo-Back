import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Sector from '../entities/Sector';


interface IDeleteSector {
  id: string;
}

export class ServiceDeleteSector {
  async execute({ id }: IDeleteSector) {
    const repo = dataSource.getRepository(Sector);

    const data = await repo.findOneBy({ id });

    if (!data) {
      throw new Error('Registro não encontrado.');
    }

    await repo.delete({ id });

    return { "message": "Registro excluído."};
  }
}

import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Sector from '../entities/Sector';


interface IFindSector {
  id: string;
}

export class ServiceFindSector {

  async execute({ id }: IFindSector): Promise<Sector> {
    const repo = dataSource.getRepository(Sector);

    const data = await repo.findOneBy({ id });

    if (!data) {
      throw new Error('Registro não encontrado.');
    }

    return data;
  }
}

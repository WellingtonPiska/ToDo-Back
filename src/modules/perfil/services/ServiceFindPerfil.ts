import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Perfil from '../entities/Perfil';

interface IFindPerfil {
  id: string;
}

export class ServiceFindPerfil {
  async execute({ id }: IFindPerfil) {
    const repo = dataSource.getRepository(Perfil);

    const perfil = await repo.findOneBy({ id });

    if (!perfil) {
      throw new Error('Perfil not found');
    }

    return perfil;
  }
}

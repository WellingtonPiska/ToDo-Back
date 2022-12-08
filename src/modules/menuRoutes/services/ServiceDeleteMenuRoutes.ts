import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import MenuRoutes from '../entities/MenuRoutes';
import { ServiceFindMenuRoutes } from './ServiceFindMenuRoutes';

type IDeleteMenuRoutes = {
  id: string;
};

export class ServiceDeleteMenuRoutes {
  async execute({ id }: IDeleteMenuRoutes): Promise<boolean> {
    const repo = dataSource.getRepository(MenuRoutes);
    const serviceFindMenuRoutes = new ServiceFindMenuRoutes();
    const ucc = await serviceFindMenuRoutes.execute({ id });
    await repo.delete({ id: ucc.id });
    return true;
  }
}

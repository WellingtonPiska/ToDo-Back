import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Apportion from '../entities/Apportion';

interface IDeleteApportion {
  id: string;
}

export class ServiceDeleteApportion {
  async execute({ id }: IDeleteApportion) {
    const repo = dataSource.getRepository(Apportion);

    const apportion = await repo.findOneBy({ id });

    if (!apportion) {
      throw new Error('Not Found');
    }

    await repo.delete({ id });

    return 'Deleted';
  }
}

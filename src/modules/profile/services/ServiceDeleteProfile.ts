import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Profile from '../entities/Profile';


interface IDeleteProfile {
  id: string;
}

export class ServiceDeleteProfile {
  async execute({ id }: IDeleteProfile) {
    const repo = dataSource.getRepository(Profile);

    const profile = await repo.findOneBy({ id });

    if (!profile) {
      throw new Error('Not Found');
    }

    await repo.delete({ id });

    return 'Deleted';
  }
}

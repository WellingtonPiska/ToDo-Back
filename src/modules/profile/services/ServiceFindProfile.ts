import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Profile from '../entities/Profile';


interface IFindProfile {
  id: string;
}

export class ServiceFindProfile {
  async execute({ id }: IFindProfile) {
    const repo = dataSource.getRepository(Profile);

    const profile = await repo.findOneBy({ id });

    if (!profile) {
      throw new Error('Profile not found');
    }

    return profile;
  }
}

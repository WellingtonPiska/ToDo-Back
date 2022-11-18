import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import Profile from '../entities/Profile';

interface ICreateProfile {
  name: string;
  obs: string;
  status: string;
}

export class ServiceCreateProfile {
  async execute({ name, obs, status }: ICreateProfile) {
    const repo = dataSource.getRepository(Profile);

    const serviceFindStatus = new ServiceFindStatus();

    const statusRef = await serviceFindStatus.execute({ id: status });

    const profileValid = await repo
      .createQueryBuilder('status')
      .where('status.pro_name_s = :name', {
        name,
      })
      .getOne();

    if (profileValid) {
      throw new Error('Duplicate register');
    }

    const profile = new Profile();
    profile.name = name;
    profile.obs = obs;
    profile.status = statusRef.id;
    const obj = await repo.save(profile);

    return obj;
  }
}

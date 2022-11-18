import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import Profile from '../entities/Profile';

import { ServiceFindProfile } from './ServiceFindProfile';

interface IUpdateProfile {
  id: string;
  name: string;
  obs: string;
  status: string;
}

export class ServiceUpdateProfile {
  async execute({ id, name, obs, status }: IUpdateProfile) {
    const repo = dataSource.getRepository(Profile);
    const serviceFindProfile = new ServiceFindProfile();
    const profile = await serviceFindProfile.execute({ id });

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    const profileValid = await repo
      .createQueryBuilder('profile')
      .where(
        'profile.pro_id_s <> :id and (profile.pro_name_s = :name)',
        {
          id,
          name
        }
      )
      .getOne();

    if (profileValid) {
      throw new Error('Duplicate register');
    }

    const obj = await repo.save({
      id: profile.id,
      name,
      obs,
      status: statusRef.id
    });
    return obj;
  }
}

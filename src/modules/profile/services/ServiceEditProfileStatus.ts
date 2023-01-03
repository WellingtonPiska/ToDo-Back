import { dataSource } from '../../../shared/database/index';
import 'reflect-metadata';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Profile from '../entities/Profile';
import { ServiceFindProfile } from './ServiceFindProfile';

type IPutEditStatusProfile = {
  id: string;
  ref: string;
};

export class ServiceEditStatusProfile {
  async execute({ id, ref }: IPutEditStatusProfile) {
    const repo = dataSource.getRepository(Profile);

    const serviceFindProfile = new ServiceFindProfile();
    const profile = await serviceFindProfile.execute({ id });

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });

    profile.status = status.id;

    const obj = await repo.save(profile);
    return obj;
  }
}

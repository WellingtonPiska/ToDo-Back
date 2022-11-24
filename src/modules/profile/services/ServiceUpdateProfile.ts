import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import Profile from '../entities/Profile';
import ProfileRepository from '../repository/ProfileRepository';
import { ServiceFindProfile } from './ServiceFindProfile';

interface IUpdateProfile {
  id: string;
  name: string;
  obs: string;
  status: string;
}

export class ServiceUpdateProfile {
  async execute({ id, name, obs, status }: IUpdateProfile): Promise<Profile> {
    const repo = new ProfileRepository();

    const serviceFindProfile = new ServiceFindProfile();
    const profile = await serviceFindProfile.execute({ id: status });

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    const profileValid = await repo.findValidUpdate(id, name);

    if (profileValid) {
      throw new Error('Profile duplicado');
    }

    profile.name = name;
    profile.obs = obs;
    profile.status = statusRef.id;
    await repo.update(profile);
    return profile;
  }
}

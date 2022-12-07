import Profile from '../entities/Profile';
import ProfileRepository from '../repository/ProfileRepository';
import { ServiceFindProfile } from './ServiceFindProfile';

type IUpdateProfile = {
  id: string;
  name: string;
  obs: string;
};

export class ServiceUpdateProfile {
  async execute({ id, name, obs }: IUpdateProfile): Promise<Profile> {
    const repo = new ProfileRepository();

    const serviceFindProfile = new ServiceFindProfile();
    const profile = await serviceFindProfile.execute({ id });

    const profileValid = await repo.findValidUpdate(id, name);

    if (profileValid) {
      throw new Error('Profile duplicado');
    }

    profile.name = name;
    profile.obs = obs;
    await repo.update(profile);
    return profile;
  }
}

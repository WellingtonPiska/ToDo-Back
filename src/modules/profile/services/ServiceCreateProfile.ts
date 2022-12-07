import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Profile from '../entities/Profile';
import ProfileRepository from '../repository/ProfileRepository';

type ICreateProfile = {
  name: string;
  obs: string;
};

export class ServiceCreateProfile {
  async execute({ name, obs }: ICreateProfile): Promise<Profile> {
    const repo = new ProfileRepository();

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({ ref: 'A' });

    const profileValid = await repo.findByName(name);

    if (profileValid) {
      throw new Error('Profile já existe');
    }

    const profile = new Profile();
    profile.name = name;
    profile.obs = obs;
    profile.status = statusRef.id;
    const obj = await repo.create(profile);

    return obj;
  }
}

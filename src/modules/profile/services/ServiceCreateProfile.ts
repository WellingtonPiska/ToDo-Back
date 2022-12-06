import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import Profile from '../entities/Profile';
import ProfileRepository from '../repository/ProfileRepository';

type ICreateProfile = {
  name: string;
  obs: string;
  status: string;
};

export class ServiceCreateProfile {
  async execute({ name, obs, status }: ICreateProfile): Promise<Profile> {
    const repo = new ProfileRepository();

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

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

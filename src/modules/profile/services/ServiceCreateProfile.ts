import StatusRepository from '../../status/repository/StatusRepository';
import Profile from '../entities/Profile';
import ProfileRepository from '../repository/ProfileRepository';


interface ICreateProfile {
  name: string;
  obs: string;
  status: string;
}

export class ServiceCreateProfile {
  async execute({ name, obs, status }: ICreateProfile) {
    const repo = new ProfileRepository();

    const repoStatus = new StatusRepository();

    const statusRef = await repoStatus.findById(status);

    if (!statusRef) {
      throw new Error('Status não cadastrado');
    }

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

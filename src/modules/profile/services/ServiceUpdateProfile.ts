import StatusRepository from '../../status/repository/StatusRepository';
import ProfileRepository from '../repository/ProfileRepository';

interface IUpdateProfile {
  id: string;
  name: string;
  obs: string;
  status: string;
}

export class ServiceUpdateProfile {
  async execute({ id, name, obs, status }: IUpdateProfile) {
    const repo = new ProfileRepository();
    const profile = await repo.findById(id);
    if (!profile) {
      throw new Error('Profile não existe')
    }

    const repoStatus = new StatusRepository();
    const statusRef = await repoStatus.findById(status);

    if (!statusRef) {
      throw new Error('Status não encontrado')
    }

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

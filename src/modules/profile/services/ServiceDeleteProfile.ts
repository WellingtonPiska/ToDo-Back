import ProfileRepository from '../repository/ProfileRepository';
import { ServiceFindProfile } from './ServiceFindProfile';

type IDeleteProfile = {
  id: string;
};

export class ServiceDeleteProfile {
  async execute({ id }: IDeleteProfile): Promise<boolean> {
    const repo = new ProfileRepository();
    const serviceFindProfile = new ServiceFindProfile();
    const profile = await serviceFindProfile.execute({ id });
    await repo.remove(profile);
    return true;
  }
}

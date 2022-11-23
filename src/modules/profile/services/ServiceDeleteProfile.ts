import ProfileRepository from '../repository/ProfileRepository';


interface IDeleteProfile {
  id: string;
}

export class ServiceDeleteProfile {
  async execute({ id }: IDeleteProfile) {
    const repo = new ProfileRepository();

    const profile = await repo.findById(id);

    if (!profile) {
      throw new Error('Profile não existe');
    }

    await repo.remove(profile);

    return 'Deleted';
  }
}

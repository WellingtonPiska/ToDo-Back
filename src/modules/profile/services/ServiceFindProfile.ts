import ProfileRepository from '../repository/ProfileRepository';


interface IFindProfile {
  id: string;
}

export class ServiceFindProfile {
  async execute({ id }: IFindProfile) {
    const repo = new ProfileRepository();

    const data = await repo.findById(id)

    if (!data) {
      throw new Error('Profile not found');
    }

    return data;
  }
}

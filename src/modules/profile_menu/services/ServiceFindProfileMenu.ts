import ProfileMenu from '../entities/ProfileMenu';
import ProfileMenuRepository from '../repository/ProfileMenuRepository';

type IFindProfileMenu = {
  id: string;
};

export class ServiceFindProfileMenu {
  async execute({ id }: IFindProfileMenu): Promise<ProfileMenu> {
    const repo = new ProfileMenuRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new Error('ProfileMenu não encontrado');
    }
    return data;
  }
}

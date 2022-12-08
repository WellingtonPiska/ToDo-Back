import { ServiceFindMenu } from '../../menu/services/ServiceFindMenu';
import { ServiceFindProfile } from '../../profile/services/ServiceFindProfile';
import ProfileMenu from '../entities/ProfileMenu';
import ProfileMenuRepository from '../repository/ProfileMenuRepository';

type ICreateProfileMenu = {
  menu: string;
  profile: string;
};

export class ServiceCreateProfileMenu {
  async execute({ menu, profile }: ICreateProfileMenu): Promise<ProfileMenu> {
    const repo = new ProfileMenuRepository();

    const serviceFindMenu = new ServiceFindMenu();
    const menuRef = await serviceFindMenu.execute({
      id: menu,
    });

    const serviceFindProfile = new ServiceFindProfile();
    const profileRef = await serviceFindProfile.execute({ id: profile });

    const pme = new ProfileMenu();
    pme.menu = menuRef.id;
    pme.profile = profileRef.id;
    const obj = await repo.create(pme);

    return obj;
  }
}

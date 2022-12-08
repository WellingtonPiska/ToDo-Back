import { ServiceFindMenu } from '../../menu/services/ServiceFindMenu';
import { ServiceFindProfile } from '../../profile/services/ServiceFindProfile';
import ProfileMenu from '../entities/ProfileMenu';
import ProfileMenuRepository from '../repository/ProfileMenuRepository';
import { ServiceFindProfileMenu } from './ServiceFindProfileMenu';

type IUpdateProfileMenu = {
  id: string;
  profile: string;
  menu: string;
};

export class ServiceUpdateProfileMenu {
  async execute({
    id,
    profile,
    menu,
  }: IUpdateProfileMenu): Promise<ProfileMenu> {
    const repo = new ProfileMenuRepository();

    const serviceFindProfileMenu = new ServiceFindProfileMenu();
    const profileMenu = await serviceFindProfileMenu.execute({ id });

    const serviceFindMenu = new ServiceFindMenu();
    const menuRef = await serviceFindMenu.execute({ id: menu });

    const serviceFindProfile = new ServiceFindProfile();
    const profileRef = await serviceFindProfile.execute({ id: profile });

    const menuValid = await repo.findValidUpdate(id);

    if (menuValid) {
      throw new Error('Menu duplicado');
    }
    profileMenu.menu = menuRef.id;
    profileMenu.profile = profileRef.id;
    await repo.update(profileMenu);
    return profileMenu;
  }
}

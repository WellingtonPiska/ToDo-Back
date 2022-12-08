import { ServiceFindGroupMenu } from '../../groupMenu/services/ServiceFindGroupMenu';
import Menu from '../entities/Menu';
import MenuRepository from '../repository/MenuRepository';
import { ServiceFindMenu } from './ServiceFindMenu';

type IUpdateMenu = {
  id: string;
  name: string;
  order: number;
  uri: string;
  icon: string;
  menuFather?: string;
  groupMenu: string;
};

export class ServiceUpdateMenu {
  async execute({
    id,
    name,
    uri,
    icon,
    order,
    groupMenu,
    menuFather,
  }: IUpdateMenu): Promise<Menu> {
    const repo = new MenuRepository();

    const serviceFindMenu = new ServiceFindMenu();
    const menu = await serviceFindMenu.execute({ id });

    const serviceFindGroupMenu = new ServiceFindGroupMenu();
    const groupMenuRef = await serviceFindGroupMenu.execute({ id: groupMenu });

    let menuFatherRef = null;
    if (menuFather) {
      const serviceFindMenu = new ServiceFindMenu();
      menuFatherRef = await serviceFindMenu.execute({ id: menuFather });
    }

    const menuValid = await repo.findValidUpdate(id, name);

    if (menuValid) {
      throw new Error('Menu duplicado');
    }
    menu.order = order;
    menu.icon = icon;
    menu.name = name;
    menu.uri = uri;
    menu.groupMenu = groupMenuRef.id;
    menu.menuFather = menuFatherRef?.id;
    await repo.update(menu);
    return menu;
  }
}

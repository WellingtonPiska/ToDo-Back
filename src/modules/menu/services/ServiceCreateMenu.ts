import { ServiceFindGroupMenu } from '../../groupMenu/services/ServiceFindGroupMenu';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Menu from '../entities/Menu';
import MenuRepository from '../repository/MenuRepository';
import { ServiceFindMenu } from './ServiceFindMenu';

type ICreateMenu = {
  name: string;
  icon: string;
  order: number;
  uri: string;
  menuFather?: string;
  groupMenu: string;
};

export class ServiceCreateMenu {
  async execute({
    name,
    icon,
    order,
    uri,
    menuFather,
    groupMenu,
  }: ICreateMenu): Promise<Menu> {
    const repo = new MenuRepository();

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({ ref: 'A' });

    const serviceFindGroupMenu = new ServiceFindGroupMenu();
    const groupMenuRef = await serviceFindGroupMenu.execute({ id: groupMenu });

    let menuFatherRef = null;
    if (menuFather) {
      const serviceFindMenu = new ServiceFindMenu();
      menuFatherRef = await serviceFindMenu.execute({ id: menuFather });
    }

    const sectorValid = await repo.findByName(name);

    if (sectorValid) {
      throw new Error('Sector já existe');
    }

    const menu = new Menu();
    menu.uri = uri;
    menu.icon = icon;
    menu.name = name;
    menu.order = order;
    menu.groupMenu = groupMenuRef.id;
    menu.menuFather = menuFatherRef?.id;
    menu.status = statusRef.id;
    const obj = await repo.create(menu);

    return obj;
  }
}

import { ServiceFindMenu } from '../../menu/services/ServiceFindMenu';
import { ServiceFindRoutes } from '../../routes/services/ServiceFindRoutes';
import MenuRoutes from '../entities/MenuRoutes';
import MenuRoutesRepository from '../repository/MenuRoutesRepository';
import { ServiceFindMenuRoutes } from './ServiceFindMenuRoutes';

type IUpdateMenuRoutes = {
  id: string;
  menu: string;
  routes: string;
};

export class ServiceUpdateMenuRoutes {
  async execute({ id, menu, routes }: IUpdateMenuRoutes): Promise<MenuRoutes> {
    const repo = new MenuRoutesRepository();

    const serviceFindMenuRoutes = new ServiceFindMenuRoutes();
    const menuRoutes = await serviceFindMenuRoutes.execute({ id });

    const serviceFindRoutes = new ServiceFindRoutes();
    const routesRef = await serviceFindRoutes.execute({ id: routes });

    const serviceFindMenu = new ServiceFindMenu();
    const menuRef = await serviceFindMenu.execute({ id: menu });

    const menuValid = await repo.findValidUpdate(id);

    if (menuValid) {
      throw new Error('Menu duplicado');
    }
    menuRoutes.menu = menuRef.id;
    menuRoutes.routes = routesRef.id;
    await repo.update(menuRoutes);
    return menuRoutes;
  }
}

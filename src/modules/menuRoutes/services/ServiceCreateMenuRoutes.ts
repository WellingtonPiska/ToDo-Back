import { ServiceFindMenu } from '../../menu/services/ServiceFindMenu';
import { ServiceFindRoutes } from '../../routes/services/ServiceFindRoutes';
import MenuRoutes from '../entities/MenuRoutes';
import MenuRoutesRepository from '../repository/MenuRoutesRepository';

type ICreateMenuRoutes = {
  menu: string;
  routes: string;
};

export class ServiceCreateMenuRoutes {
  async execute({ menu, routes }: ICreateMenuRoutes): Promise<MenuRoutes> {
    const repo = new MenuRoutesRepository();

    const serviceFindMenu = new ServiceFindMenu();
    const menuRef = await serviceFindMenu.execute({
      id: menu,
    });

    const serviceFindRoutes = new ServiceFindRoutes();
    const routesRef = await serviceFindRoutes.execute({ id: routes });

    const mro = new MenuRoutes();
    mro.menu = menuRef.id;
    mro.routes = routesRef.id;
    const obj = await repo.create(mro);

    return obj;
  }
}

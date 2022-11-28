import Menu from '../entities/Menu';
import MenuRepository from '../repository/MenuRepository';
import { ServiceFindMenu } from './ServiceFindMenu';

interface IUpdateMenu {
  id: string;
  name: string;
}

export class ServiceUpdateMenu {
  async execute({
    id,
    name,
  }: IUpdateMenu): Promise<Menu> {
    const repo = new MenuRepository();

    const serviceFindMenu = new ServiceFindMenu();

    const menu = await serviceFindMenu.execute({ id });

    const valid = await repo.findValidUpdate(id, name);

    if (valid) {
      throw new Error('Registro com valores duplicados.');
    }

    menu.name = name;
    await repo.update(menu);

    return menu;
  }
}

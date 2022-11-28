import Menu from '../entities/Menu';
import MenuRepository from '../repository/MenuRepository';

interface ICreateMenu {
  name: string;
}

export class ServiceCreateMenu {
  async execute({ name }: ICreateMenu): Promise<Menu> {
    const repo = new MenuRepository();

    const menuValid = await repo.findValid(name);

    if (menuValid) {
      throw new Error('Registro com valores duplicados.');
    }

    const menu = new Menu();
    menu.name = name;
    const obj = await repo.create(menu);

    return obj;
  }
}

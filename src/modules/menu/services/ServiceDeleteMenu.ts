import MenuRepository from '../repository/MenuRepository';
import { ServiceFindMenu } from './ServiceFindMenu';

type IDeleteMenu = {
  id: string;
};

export class ServiceDeleteMenu {
  async execute({ id }: IDeleteMenu): Promise<boolean> {
    const repo = new MenuRepository();
    const serviceFindMenu = new ServiceFindMenu();
    const menu = await serviceFindMenu.execute({ id });
    await repo.remove(menu);
    return true;
  }
}

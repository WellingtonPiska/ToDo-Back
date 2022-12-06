import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Menu from '../entities/Menu';
import { ServiceFindMenu } from './ServiceFindMenu';

type IDeleteMenu = {
  id: string;
};

export class ServiceDeleteMenu {
  async execute({ id }: IDeleteMenu): Promise<boolean> {
    const repo = dataSource.getRepository(Menu);
    const serviceFindMenu = new ServiceFindMenu();
    const menu = await serviceFindMenu.execute({ id });
    await repo.delete({ id: menu.id });
    return true;
  }
}

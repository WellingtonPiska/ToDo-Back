import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Menu from '../entities/Menu';
import { ServiceFindMenu } from './ServiceFindMenu';


interface IDeleteMenu {
  id: string;
}

export class ServiceDeleteMenu {
  async execute({ id }: IDeleteMenu): Promise<Boolean> {
    const repo = dataSource.getRepository(Menu);
    const serviceFindMenu = new ServiceFindMenu();
    const menu = await serviceFindMenu.execute({ id });
    await repo.delete({ id: menu.id });
    return true;
  }
}

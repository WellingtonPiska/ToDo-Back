import { dataSource } from '../../../shared/database/index';
import 'reflect-metadata';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Menu from '../entities/Menu';
import { ServiceFindMenu } from './ServiceFindMenu';

type IPutEditStatusMenu = {
  id: string;
  ref: string;
};

export class ServiceEditStatusMenu {
  async execute({ id, ref }: IPutEditStatusMenu) {
    const repo = dataSource.getRepository(Menu);

    const serviceFindMenu = new ServiceFindMenu();
    const menu = await serviceFindMenu.execute({ id });

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });

    menu.status = status.id;

    const obj = await repo.save(menu);
    return obj;
  }
}

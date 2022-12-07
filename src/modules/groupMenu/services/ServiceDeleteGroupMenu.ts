import GroupMenuRepository from '../repository/GroupMenuRepository';
import { ServiceFindGroupMenu } from './ServiceFindGroupMenu';

type IDeleteGroupMenu = {
  id: string;
};

export class ServiceDeleteGroupMenu {
  async execute({ id }: IDeleteGroupMenu): Promise<boolean> {
    const repo = new GroupMenuRepository();
    const serviceFindGroupMenu = new ServiceFindGroupMenu();
    const profile = await serviceFindGroupMenu.execute({ id });
    await repo.remove(profile);
    return true;
  }
}

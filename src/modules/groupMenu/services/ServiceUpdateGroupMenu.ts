import GroupMenu from '../entities/GroupMenu';
import GroupMenuRepository from '../repository/GroupMenuRepository';
import { ServiceFindGroupMenu } from './ServiceFindGroupMenu';

type IUpdateGroupMenu = {
  id: string;
  name: string;
  description: string;
};

export class ServiceUpdateGroupMenu {
  async execute({
    id,
    name,
    description,
  }: IUpdateGroupMenu): Promise<GroupMenu> {
    const repo = new GroupMenuRepository();

    const serviceFindGroupMenu = new ServiceFindGroupMenu();
    const groupMenu = await serviceFindGroupMenu.execute({ id });

    const groupMenuValid = await repo.findValidUpdate(id, name);

    if (groupMenuValid) {
      throw new Error('groupMenu duplicado');
    }
    groupMenu.description = description;
    groupMenu.name = name;
    await repo.update(groupMenu);
    return groupMenu;
  }
}

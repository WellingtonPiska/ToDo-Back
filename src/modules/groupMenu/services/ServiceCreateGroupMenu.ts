import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import GroupMenu from '../entities/GroupMenu';
import GroupMenuRepository from '../repository/GroupMenuRepository';

type ICreateGroupMenu = {
  name: string;
  description: string;
};

export class ServiceCreateGroupMenu {
  async execute({ name, description }: ICreateGroupMenu): Promise<GroupMenu> {
    const repo = new GroupMenuRepository();

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({ ref: 'A' });

    const groupMenuValid = await repo.findByName(name);

    if (groupMenuValid) {
      throw new Error('CostCenter já existe');
    }

    const gme = new GroupMenu();
    gme.name = name;
    gme.description = description;
    gme.status = statusRef.id;
    const obj = await repo.create(gme);

    return obj;
  }
}

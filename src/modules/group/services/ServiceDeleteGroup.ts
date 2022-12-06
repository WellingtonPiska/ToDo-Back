import GroupRepository from '../repository/GroupRepository';
import { ServiceFindGroup } from './ServiceFindGroup';

type IDeleteGroup = {
  id: string;
};

export class ServiceDeleteGroup {
  async execute({ id }: IDeleteGroup): Promise<boolean> {
    const repo = new GroupRepository();
    const serviceFindGroup = new ServiceFindGroup();
    const group = await serviceFindGroup.execute({ id });
    await repo.remove(group);
    return true;
  }
}

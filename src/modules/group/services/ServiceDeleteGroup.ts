import GroupRepository from '../repository/GroupRepository';
import { ServiceFindGroup } from './ServiceFindGroup';


interface IDeleteGroup {
  id: string;
}

export class ServiceDeleteGroup {
  async execute({ id }: IDeleteGroup): Promise<Boolean> {
    const repo = new GroupRepository();
    const serviceFindGroup = new ServiceFindGroup();
    const group = await serviceFindGroup.execute({ id });
    await repo.remove(group);
    return true;
  }
}

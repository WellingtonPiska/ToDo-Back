import Group from '../entities/Group';
import GroupRepository from '../repository/GroupRepository';
import { ServiceFindGroup } from './ServiceFindGroup';

type IUpdateGroup = {
  id: string;
  name: string;
  type: string;
  mail?: string;
  dn: string;
  sid: string;
  sync: string;
};

export class ServiceUpdateGroup {
  async execute({
    id,
    name,
    type,
    mail,
    dn,
    sid,
    sync,
  }: IUpdateGroup): Promise<Group> {
    const repo = new GroupRepository();

    const serviceFindGroup = new ServiceFindGroup();
    const group = await serviceFindGroup.execute({ id });

    const groupValid = await repo.findValidUpdate(id, name);

    if (groupValid) {
      throw new Error('Group duplicado');
    }
    group.name = name;
    group.type = type;
    group.mail = mail;
    group.dn = dn;
    group.sid = sid;
    group.sync = sync;
    await repo.update(group);
    return group;
  }
}

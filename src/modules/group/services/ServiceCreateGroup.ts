import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import Group from '../entities/Group';
import GroupRepository from '../repository/GroupRepository';

type ICreateGroup = {
  name: string;
  status: string;
  type: string;
  mail?: string;
  dn: string;
  sid: string;
  sync: string;
};

export class ServiceCreateGroup {
  async execute({
    name,
    status,
    type,
    mail,
    dn,
    sid,
    sync,
  }: ICreateGroup): Promise<Group> {
    const repo = new GroupRepository();

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    const groupValid = await repo.findByName(name);

    if (groupValid) {
      throw new Error('Group já existe');
    }

    const gro = new Group();
    gro.name = name;
    gro.status = statusRef.id;
    gro.type = type;
    gro.mail = mail;
    gro.dn = dn;
    gro.sid = sid;
    gro.sync = sync;
    const obj = await repo.create(gro);

    return obj;
  }
}

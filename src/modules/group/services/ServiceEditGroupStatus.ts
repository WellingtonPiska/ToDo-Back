import { dataSource } from '../../../shared/database/index';
import 'reflect-metadata';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Group from '../entities/Group';
import { ServiceFindGroup } from './ServiceFindGroup';

type IPutEditStatusGroup = {
  id: string;
  ref: string;
};

export class ServiceEditStatusGroup {
  async execute({ id, ref }: IPutEditStatusGroup) {
    const repo = dataSource.getRepository(Group);

    const serviceFindGroup = new ServiceFindGroup();
    const group = await serviceFindGroup.execute({ id });

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });

    group.status = status.id;

    const obj = await repo.save(group);
    return obj;
  }
}

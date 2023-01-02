import { dataSource } from '../../../shared/database/index';
import 'reflect-metadata';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import User from '../entities/User';
import { ServiceFindUser } from './ServiceFindUser';

type IPutEditStatusUser = {
  id: string;
  ref: string;
};

export class ServiceEditStatusUser {
  async execute({ id, ref }: IPutEditStatusUser) {
    const repo = dataSource.getRepository(User);

    const serviceFindUser = new ServiceFindUser();
    const user = await serviceFindUser.execute({ id });

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });

    user.status = status.id;

    const obj = await repo.save(user);
    return obj;
  }
}

import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import User from '../entities/User';
import { ServiceFindUser } from './ServiceFindUser';

type IDeleteUser = {
  id: string;
};

export class ServiceDeleteUser {
  async execute({ id }: IDeleteUser): Promise<boolean> {
    const repo = dataSource.getRepository(User);
    const serviceFindUser = new ServiceFindUser();
    const user = await serviceFindUser.execute({ id });
    await repo.delete({ id: user.id });
    return true;
  }
}

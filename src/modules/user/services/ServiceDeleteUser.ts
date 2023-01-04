import UserRepository from '../repository/UserRepository';
import { ServiceFindUser } from './ServiceFindUser';

type IDeleteUser = {
  id: string;
};

export class ServiceDeleteUser {
  async execute({ id }: IDeleteUser): Promise<boolean> {
    const repo = new UserRepository();
    const serviceFindUser = new ServiceFindUser();
    const user = await serviceFindUser.execute({ id });
    await repo.remove(user);
    return true;
  }
}

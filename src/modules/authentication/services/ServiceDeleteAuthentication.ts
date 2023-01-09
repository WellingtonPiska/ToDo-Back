import AuthenticationRepository from '../repository/AuthenticationRepository';
import { ServiceFindAuthentication } from './ServiceFindAuthentication';

type IDeleteAuthentication = {
  id: string;
};

export class ServiceDeleteAuthentication {
  async execute({ id }: IDeleteAuthentication): Promise<boolean> {
    const repo = new AuthenticationRepository();
    const serviceFindAuthentication = new ServiceFindAuthentication();
    const authentication = await serviceFindAuthentication.execute({ id });
    await repo.remove(authentication);
    return true;
  }
}

import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import Authentication from '../entities/Authentication';
import AuthenticationRepository from '../repository/AuthenticationRepository';
import { ServiceFindAuthentication } from './ServiceFindAuthentication';

type IUpdateAuthentication = {
  id: string;
  token: string;
  user: string;
};

export class ServiceUpdateAuthentication {
  async execute({
    id,
    token,
    user,
  }: IUpdateAuthentication): Promise<Authentication> {
    const repo = new AuthenticationRepository();

    const serviceFindAuthentication = new ServiceFindAuthentication();
    const authentication = await serviceFindAuthentication.execute({
      id,
    });

    const serviceFindUser = new ServiceFindUser();
    const userRef = await serviceFindUser.execute({ id: user });

    authentication.token = token;
    authentication.user = userRef.id;
    await repo.update(authentication);
    return authentication;
  }
}

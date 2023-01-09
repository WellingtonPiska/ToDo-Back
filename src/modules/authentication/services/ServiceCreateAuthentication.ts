import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import Authentication from '../entities/Authentication';
import AuthenticationRepository from '../repository/AuthenticationRepository';

type ICreateAuthentication = {
  token: string;
  user: string;
};

export class ServiceCreateAuthentication {
  async execute({
    token,
    user,
  }: ICreateAuthentication): Promise<Authentication> {
    const repo = new AuthenticationRepository();

    const serviceFindUser = new ServiceFindUser();
    const userRef = await serviceFindUser.execute({ id: user });

    const authentication = new Authentication();
    authentication.token = token;
    authentication.user = userRef.id;
    const obj = await repo.create(authentication);

    return obj;
  }
}

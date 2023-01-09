import Authentication from '../entities/Authentication';
import AuthenticationRepository from '../repository/AuthenticationRepository';

export class ServiceListAuthentication {
  async execute(): Promise<Authentication[]> {
    const repo = new AuthenticationRepository();
    const list = await repo.findAll();

    return list;
  }
}

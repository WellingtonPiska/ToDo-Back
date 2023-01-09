import Authentication from '../entities/Authentication';
import AuthenticationRepository from '../repository/AuthenticationRepository';

type IFindAuthentication = {
  id: string;
};

export class ServiceFindAuthentication {
  async execute({ id }: IFindAuthentication): Promise<Authentication> {
    const repo = new AuthenticationRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new Error('Autenticação não encontrada');
    }

    return data;
  }
}

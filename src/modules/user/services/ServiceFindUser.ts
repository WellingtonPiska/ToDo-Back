import AppError from '../../../shared/errors/AppError';
import User from '../entities/User';
import UserRepository from '../repository/UserRepository';

type IFindUser = {
  id: string;
};

export class ServiceFindUser {
  async execute({ id }: IFindUser): Promise<User> {
    const repo = new UserRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new AppError('Usuário não encontrado');
    }

    return data;
  }
}

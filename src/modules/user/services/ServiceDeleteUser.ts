import AppError from '../../../shared/errors/AppError';
import UserRepository from '../repository/UserRepository';

type IDeleteUser = {
  id: string;
};

export class ServiceDeleteUser {
  async execute({ id }: IDeleteUser): Promise<boolean> {
    const repo = new UserRepository();
    const data = await repo.findById(id);
    if (!data) {
      throw new AppError('Usuário não encontrado.');
    }
    await repo.remove(data);
    return true;
  }
}

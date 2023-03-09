import AppError from '../../../shared/errors/AppError';
import FormRepository from '../repository/FormRepository';

type IDeleteForm = {
  id: string;
};

export class ServiceDeleteForm {
  async execute({ id }: IDeleteForm): Promise<boolean> {
    const repo = new FormRepository();

    const data = await repo.findById(id);
    if (!data) {
      throw new AppError('Formulario nao encontrado');
    }
    await repo.remove(data);
    return true;
  }
}

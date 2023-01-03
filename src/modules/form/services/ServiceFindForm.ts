import Form from '../entities/Form';
import FormRepository from '../repository/FormRepository';

type IFindForm = {
  id: string;
};

export class ServiceFindForm {
  async execute({ id }: IFindForm): Promise<Form> {
    const repo = new FormRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new Error('Form not found');
    }

    return data;
  }
}

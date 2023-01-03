import Form from '../entities/Form';
import FormRepository from '../repository/FormRepository';

type ICreateForm = {
  title: string;
  description: string;
};

export class ServiceCreateForm {
  async execute({ title, description }: ICreateForm): Promise<Form> {
    const repo = new FormRepository();

    const formValid = await repo.findByTitle(title);

    if (formValid) {
      throw new Error('O Formulário já existe');
    }

    const form = new Form();
    form.title = title;
    form.description = description;
    const obj = await repo.create(form);

    return obj;
  }
}

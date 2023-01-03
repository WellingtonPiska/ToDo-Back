import Form from '../entities/Form';
import FormRepository from '../repository/FormRepository';
import { ServiceFindForm } from './ServiceFindForm';

type IUpdateForm = {
  id: string;
  title: string;
  description: string;
};

export class ServiceUpdateForm {
  async execute({ id, title, description }: IUpdateForm): Promise<Form> {
    const repo = new FormRepository();

    const serviceFindForm = new ServiceFindForm();
    const form = await serviceFindForm.execute({ id });

    const formValid = await repo.findValidUpdate(id, title, description);

    if (formValid) {
      throw new Error('Formulário duplicado');
    }

    form.title = title;
    form.description = description;
    await repo.update(form);
    return form;
  }
}

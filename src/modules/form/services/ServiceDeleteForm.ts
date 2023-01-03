import FormRepository from '../repository/FormRepository';
import { ServiceFindForm } from './ServiceFindForm';

type IDeleteForm = {
  id: string;
};

export class ServiceDeleteForm {
  async execute({ id }: IDeleteForm): Promise<boolean> {
    const repo = new FormRepository();
    const serviceFindForm = new ServiceFindForm();
    const form = await serviceFindForm.execute({ id });
    await repo.remove(form);
    return true;
  }
}

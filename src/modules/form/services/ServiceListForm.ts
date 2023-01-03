import Form from '../entities/Form';
import FormRepository from '../repository/FormRepository';

export class ServiceListForm {
  async execute(): Promise<Form[]> {
    const repo = new FormRepository();
    const list = await repo.findAll();

    return list;
  }
}

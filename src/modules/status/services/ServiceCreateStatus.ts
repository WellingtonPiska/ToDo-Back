import Status from '../entities/Status';
import StatusRepository from '../repository/StatusRepository';

interface ICreateStatus {
  name: string;
  reference: string;
  color: string;
}

export class ServiceCreateStatus {
  async execute({ name, reference, color }: ICreateStatus): Promise<Status> {
    const repo = new StatusRepository();

    const statusValid = await repo.findValid(name, reference);

    if (statusValid) {
      throw new Error('Registro com valores duplicados.');
    }

    const status = new Status();
    status.name = name;
    status.reference = reference;
    status.color = color;
    const obj = await repo.create(status);

    return obj;
  }
}

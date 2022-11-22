import StatusRepository from '../repository/StatusRepository';
import Status from '../entities/Status';

interface IUpdateStatus {
  id: string;
  name: string;
  reference: string;
  color: string;
}

export class ServiceUpdateStatus {
  async execute({
    id,
    name,
    reference,
    color,
  }: IUpdateStatus): Promise<Status> {
    const repo = new StatusRepository();

    const status = await repo.findById(id);

    if (!status) {
      throw new Error('Registro não encontrado.');
    }

    const valid = await repo.findValidUpdate(id, name, reference);

    if (valid) {
      throw new Error('Registro com valores duplicados.');
    }

    status.name = name;
    status.reference = reference;
    status.color = color;
    await repo.update(status);

    return status;
  }
}

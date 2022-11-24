import Status from '../entities/Status';
import StatusRepository from '../repository/StatusRepository';
import { ServiceFindStatus } from './ServiceFindStatus';

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

    const serviceFindStatus = new ServiceFindStatus();

    const status = await serviceFindStatus.execute({ id });

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

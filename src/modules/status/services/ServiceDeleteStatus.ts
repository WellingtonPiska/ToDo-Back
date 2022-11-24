import StatusRepository from '../repository/StatusRepository';
import { ServiceFindStatus } from './ServiceFindStatus';

interface IDeleteStatus {
  id: string;
}

export class ServiceDeleteStatus {
  async execute({ id }: IDeleteStatus): Promise<Boolean> {
    const repo = new StatusRepository();
    const serviceFindStatus = new ServiceFindStatus();
    const status = await serviceFindStatus.execute({ id });
    await repo.remove(status);
    return true;
  }
}

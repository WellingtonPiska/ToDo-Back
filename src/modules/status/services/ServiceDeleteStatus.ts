import StatusRepository from '../repository/StatusRepository';
import { ServiceFindStatus } from './ServiceFindStatus';

type IDeleteStatus = {
  id: string;
};

export class ServiceDeleteStatus {
  async execute({ id }: IDeleteStatus): Promise<boolean> {
    const repo = new StatusRepository();
    const serviceFindStatus = new ServiceFindStatus();
    const status = await serviceFindStatus.execute({ id });
    await repo.remove(status);
    return true;
  }
}

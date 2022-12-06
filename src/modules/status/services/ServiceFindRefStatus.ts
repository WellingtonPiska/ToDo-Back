import Status from '../entities/Status';
import StatusRepository from '../repository/StatusRepository';

type IFindStatus = {
  ref: string;
};

export class ServiceFindRefStatus {
  async execute({ ref }: IFindStatus): Promise<Status> {
    const repoStatus = new StatusRepository();
    const status = await repoStatus.findByRef(ref);
    if (!status) {
      throw new Error('Status não existe');
    }
    return status;
  }
}

import Status from '../entities/Status';
import StatusRepository from '../repository/StatusRepository';

interface IFindStatus {
  id: string;
}

export class ServiceFindStatus {
  async execute({ id }: IFindStatus): Promise<Status> {
    const repo = new StatusRepository();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('Registro não encontrado.');
    }
    return data;
  }
}

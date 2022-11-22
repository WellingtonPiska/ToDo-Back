import StatusRepository from '../repository/StatusRepository';

interface IFindStatus {
  id: string;
}

export class ServiceFindStatus {
  async execute({ id }: IFindStatus) {
    const repo = new StatusRepository();
    const data = repo.findById(id);

    if (!data) {
      throw new Error('Registro não encontrado.');
    }

    return data;
  }
}

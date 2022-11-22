import StatusRepository from '../repository/StatusRepository';

interface IDeleteStatus {
  id: string;
}

export class ServiceDeleteStatus {
  async execute({ id }: IDeleteStatus): Promise<void> {
    const repo = new StatusRepository();

    const status = await repo.findById(id);

    if (!status) {
      throw new Error('Registro não encontrado.');
    }

    await repo.remove(status);
  }
}

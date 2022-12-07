import RoutesRepository from '../repository/RoutesRepository';

type IFindRoutes = {
  id: string;
};

export class ServiceFindRoutes {
  async execute({ id }: IFindRoutes) {
    const repo = new RoutesRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new Error('Routes não encontrado');
    }
    return data;
  }
}

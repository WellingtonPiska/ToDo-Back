import MenuRoutes from '../entities/MenuRoutes';
import MenuRoutesRepository from '../repository/MenuRoutesRepository';

type IFindMenuRoutes = {
  id: string;
};

export class ServiceFindMenuRoutes {
  async execute({ id }: IFindMenuRoutes): Promise<MenuRoutes> {
    const repo = new MenuRoutesRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new Error('MenuRoutes não encontrado');
    }
    return data;
  }
}

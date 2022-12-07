import RoutesRepository from '../repository/RoutesRepository';
import { ServiceFindRoutes } from './ServiceFindRoutes';

type IDeleteRoutes = {
  id: string;
};

export class ServiceDeleteRoutes {
  async execute({ id }: IDeleteRoutes): Promise<boolean> {
    const repo = new RoutesRepository();
    const serviceFindCosCenter = new ServiceFindRoutes();
    const routes = await serviceFindCosCenter.execute({ id });
    await repo.remove(routes);
    return true;
  }
}

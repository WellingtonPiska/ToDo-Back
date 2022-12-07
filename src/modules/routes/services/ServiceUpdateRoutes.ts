import Routes from '../entities/Routes';
import RoutesRepository from '../repository/RoutesRepository';
import { ServiceFindRoutes } from './ServiceFindRoutes';

type IUpdateRoutes = {
  id: string;
  method: string;
  description: string;
  uri: string;
};

export class ServiceUpdateRoutes {
  async execute({
    id,
    method,
    description,
    uri,
  }: IUpdateRoutes): Promise<Routes> {
    const repo = new RoutesRepository();

    const serviceFindRoutes = new ServiceFindRoutes();
    const routes = await serviceFindRoutes.execute({ id });

    const routesValid = await repo.findValidUpdate(id);

    if (routesValid) {
      throw new Error('Rota duplicada');
    }
    routes.description = description;
    routes.uri = uri;
    routes.method = method;
    await repo.update(routes);
    return routes;
  }
}

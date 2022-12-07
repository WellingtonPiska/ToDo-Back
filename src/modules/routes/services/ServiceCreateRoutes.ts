import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Routes from '../entities/Routes';
import RoutesRepository from '../repository/RoutesRepository';

type ICreateRoutes = {
  uri: string;
  method: string;
  description: string;
};

export class ServiceCreateRoutes {
  async execute({ method, description, uri }: ICreateRoutes): Promise<Routes> {
    const repo = new RoutesRepository();

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({ ref: 'A' });

    const rou = new Routes();
    rou.uri = uri;
    rou.method = method;
    rou.status = statusRef.id;
    rou.description = description;
    const obj = await repo.create(rou);

    return obj;
  }
}

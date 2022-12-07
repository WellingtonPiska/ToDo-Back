import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import Routes from '../entities/Routes';
import RoutesRepository from '../repository/RoutesRepository';

type ICreateRoutes = {
  uri: string;
  method: string;
  description: string;
  status: string;
};

export class ServiceCreateRoutes {
  async execute({
    status,
    method,
    description,
    uri,
  }: ICreateRoutes): Promise<Routes> {
    const repo = new RoutesRepository();

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    const rou = new Routes();
    rou.uri = uri;
    rou.method = method;
    rou.status = statusRef.id;
    rou.description = description;
    const obj = await repo.create(rou);

    return obj;
  }
}

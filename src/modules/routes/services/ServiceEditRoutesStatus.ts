import { dataSource } from '../../../shared/database/index';
import 'reflect-metadata';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Routes from '../entities/Routes';
import { ServiceFindRoutes } from './ServiceFindRoutes';

type IPutEditStatusRoutes = {
  id: string;
  ref: string;
};

export class ServiceEditStatusRoutes {
  async execute({ id, ref }: IPutEditStatusRoutes) {
    const repo = dataSource.getRepository(Routes);

    const serviceFindRoutes = new ServiceFindRoutes();
    const routes = await serviceFindRoutes.execute({ id });

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });

    routes.status = status.id;

    const obj = await repo.save(routes);
    return obj;
  }
}

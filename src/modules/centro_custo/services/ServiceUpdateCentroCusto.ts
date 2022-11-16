import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import CentroCusto from '../entities/CentroCusto';
import { ServiceFindCentroCusto } from './ServiceFindCentroCusto';

interface IUpdateCentroCusto {
  id: string;
  nome: string;
  obs: string;
  rateio: string;
  status: string;
}

export class ServiceUpdateCentroCusto {
  async execute({ id, nome, obs, rateio, status }: IUpdateCentroCusto) {
    const repo = dataSource.getRepository(CentroCusto);
    const serviceFindCentroCusto = new ServiceFindCentroCusto();
    const centroCusto = await serviceFindCentroCusto.execute({ id });

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    const centroCustoValid = await repo
      .createQueryBuilder('centro_custo')
      .where(
        'centro_custo.ccu_id_s <> :id and (centro_custo.ccu_nome_s = :nome)',
        {
          id,
          nome
        }
      )
      .getOne();

    if (centroCustoValid) {
      throw new Error('Duplicate register');
    }

    const obj = await repo.save({
      id: centroCusto.id,
      nome,
      obs,
      rateio,
      status: statusRef.id
    });
    return obj;
  }
}

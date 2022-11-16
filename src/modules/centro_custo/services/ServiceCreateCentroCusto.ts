import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import CentroCusto from '../entities/CentroCusto';

interface ICreateCentroCusto {
  nome: string;
  obs: string;
  rateio: string;
  status: string;
}

export class ServiceCreateCentroCusto {
  async execute({ nome, rateio, obs, status }: ICreateCentroCusto) {
    const repo = dataSource.getRepository(CentroCusto);

    const serviceFindStatus = new ServiceFindStatus();

    const statusRef = await serviceFindStatus.execute({ id: status });

    const centroCustoValid = await repo
      .createQueryBuilder('status')
      .where('status.ccu_nome_s = :nome', {
        nome,
      })
      .getOne();

    if (centroCustoValid) {
      throw new Error('Duplicate register');
    }

    const cc = new CentroCusto();
    cc.nome = nome;
    cc.obs = obs;
    cc.rateio = rateio;
    cc.status = statusRef.id;
    const obj = await repo.save(cc);

    return obj;
  }
}

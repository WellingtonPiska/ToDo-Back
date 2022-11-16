import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Status from '../entities/Status';
import { ServiceFindStatus } from './ServiceFindStatus';

interface IUpdateStatus {
  id: string;
  nome: string;
  referencia: string;
  cor: string;
}

export class ServiceUpdateStatus {
  async execute({ id, nome, referencia, cor }: IUpdateStatus) {
    const repo = dataSource.getRepository(Status);

    const serviceFindStatus = new ServiceFindStatus();

    const status = await serviceFindStatus.execute({ id });

    const statusValid = await repo
      .createQueryBuilder('status')
      .where(
        'status.sta_id_s <> :id and (status.sta_nome_s = :nome or status.sta_ref_s = :reference)',
        {
          id,
          nome,
          referencia,
        }
      )
      .getOne();

    if (statusValid) {
      throw new Error('Duplicate register');
    }

    const obj = await repo.save({
      id: status.id,
      nome,
      referencia,
      cor,
    });
    return obj;
  }
}

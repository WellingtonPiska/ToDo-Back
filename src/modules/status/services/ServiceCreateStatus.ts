import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Status from '../entities/Status';

interface ICreateStatus {
  nome: string;
  referencia: string;
  cor: string;
}

export class ServiceCreateStatus {
  async execute({ nome, referencia, cor }: ICreateStatus) {
    const repo = dataSource.getRepository(Status);

    const statusValid = await repo
      .createQueryBuilder('status')
      .where('status.sta_nome_s = :nome or status.sta_ref_s = :referencia', {
        nome,
        referencia,
      })
      .getOne();

    if (statusValid) {
      throw new Error('Duplicate register');
    }

    const status = new Status();
    status.nome = nome;
    status.referencia = referencia;
    status.cor = cor;
    const obj = await repo.save(status);

    return obj;
  }
}

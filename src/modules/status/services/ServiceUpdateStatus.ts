import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Status from '../entities/Status';
import { Not } from 'typeorm';

interface IUpdateStatus {
  id: string;
  name: string;
  reference: string;
  color: string;
}

export class ServiceUpdateStatus {
  async execute({ id, name, reference, color }: IUpdateStatus) {
    const repo = dataSource.getRepository(Status);

    const status = await repo.findOneBy({ id });

    if (!status) {
      throw new Error('Register not found');
    }

    const statusValid = await repo
      .createQueryBuilder('status')
      .where(
        'status.sta_id_s <> :id and (status.sta_name_s = :name or status.sta_ref_s = :reference)',
        {
          id,
          name,
          reference,
        }
      )
      .getOne();

    if (statusValid) {
      throw new Error('Duplicate register');
    }

    const obj = await repo.save({
      ...status,
      name,
      reference,
      color,
    });
    return obj;
  }
}

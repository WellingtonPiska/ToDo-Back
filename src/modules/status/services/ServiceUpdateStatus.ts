import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Status from '../entities/Status';
import { ServiceFindStatus } from './ServiceFindStatus';

interface IUpdateStatus {
  id: string;
  name: string;
  reference: string;
  color: string;
}

export class ServiceUpdateStatus {
  async execute({ id, name, reference, color }: IUpdateStatus) {
    const repo = dataSource.getRepository(Status);

    const serviceFindStatus = new ServiceFindStatus();

    const status = await serviceFindStatus.execute({ id });

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
      id: status.id,
      name,
      reference,
      color,
    });
    return obj;
  }
}

import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Status from '../entities/Status';

interface ICreateStatus {
  name: string;
  reference: string;
  color: string;
}

export class ServiceCreateStatus {
  async execute({ name, reference, color }: ICreateStatus) {
    const repo = dataSource.getRepository(Status);

    const statusValid = await repo
      .createQueryBuilder('status')
      .where('status.sta_name_s = :name or status.sta_ref_s = :reference', {
        name,
        reference,
      })
      .getOne();

    if (statusValid) {
      throw new Error('Duplicate register');
    }

    const status = new Status();
    status.name = name;
    status.reference = reference;
    status.color = color;
    const obj = await repo.save(status);

    return obj;
  }
}

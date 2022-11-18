import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Place from '../entities/Place';


interface IDeletePlace {
  id: string;
}

export class ServiceDeletePlace {
  async execute({ id }: IDeletePlace) {
    const repo = dataSource.getRepository(Place);

    const place = await repo.findOneBy({ id });

    if (!place) {
      throw new Error('Not Found');
    }

    await repo.delete({ id });

    return 'Deleted';
  }
}

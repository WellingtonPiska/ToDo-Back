import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Place from '../entities/Place';


interface IFindPlace {
  id: string;
}

export class ServiceFindPlace {
  async execute({ id }: IFindPlace): Promise<Place> {
    const repo = dataSource.getRepository(Place);

    const place = await repo.findOneBy({ id });

    if (!place) {
      throw new Error('Place not founded');
    }

    return place;
  }
}

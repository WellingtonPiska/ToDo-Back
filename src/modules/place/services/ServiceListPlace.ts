import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Place from '../entities/Place';



export class ServiceListPlace {
  async execute() {
    const repo = dataSource.getRepository(Place);
    const place = await repo.find({
      relations: {
        costCenterRef: true,
        placeFatherRef: true,
        statusRef: true,
      }
    });
    return place;
  }
}

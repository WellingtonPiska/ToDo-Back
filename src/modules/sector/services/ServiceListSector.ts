import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import Sector from '../entities/Sector';



export class ServiceListSector {
  async execute() {
    const repo = dataSource.getRepository(Sector);
    const data = await repo.find({
      relations: {
        costCenterRef: true,
        sectorFatherRef: true,
        statusRef: true,
      }
    });
    return data;
  }
}

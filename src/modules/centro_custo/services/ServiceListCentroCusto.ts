import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import CentroCusto from '../entities/CentroCusto';

export class ServiceListCentroCusto {
  async execute() {
    const repo = dataSource.getRepository(CentroCusto);
    const centroCusto = await repo.find({
      relations: {
        status: true
      }
    });
    return centroCusto;
  }
}

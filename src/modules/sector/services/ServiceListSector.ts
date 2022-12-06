import 'reflect-metadata';
import Sector from '../entities/Sector';
import SectorRepository from '../repository/SectorRepository';

type ISearchParams = {
  page: number;
  limit: number;
  ref: string;
};

type IResponseSector = {
  per_page: number;
  total: number;
  current_page: number;
  data: Sector[];
};

export class ServiceListSector {
  async execute({ page, limit, ref }: ISearchParams): Promise<IResponseSector> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new SectorRepository();
    const list = await repo.findAll({ page, skip, take, ref });
    return list;
  }
}

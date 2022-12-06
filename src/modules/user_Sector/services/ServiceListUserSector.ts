import 'reflect-metadata';
import UserSector from '../entities/UserSector';
import UserSectorRepository from '../repository/UserSectorRepository';

type ISearchParams = {
  page: number;
  limit: number;
};

type IResponseUserSector = {
  per_page: number;
  total: number;
  current_page: number;
  data: UserSector[];
};

export class ServiceListUserSector {
  async execute({ page, limit }: ISearchParams): Promise<IResponseUserSector> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new UserSectorRepository();
    const list = await repo.findAll({ page, skip, take });
    return list;
  }
}

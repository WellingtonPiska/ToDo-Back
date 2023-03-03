import User from '../entities/User';
import UserRepository from '../repository/UserRepository';

type ISearchParams = {
  page: number;
  limit: number;
  search?: string;
  select: boolean;
};

type IResponseUser = {
  per_page: number;
  total: number;
  current_page: number;
  data: User[];
};

export class ServiceListUser {
  async execute({
    page,
    limit,
    search,
    select,
  }: ISearchParams): Promise<IResponseUser> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new UserRepository();
    const list = await repo.findAll({ page, skip, take, search, select });

    return list;
  }
}

import 'reflect-metadata';
import User from '../entities/User';
import UserRepository from '../repository/UserRepository';

interface ISearchParams {
  page: number;
  limit: number;
  ref: string;
}

interface IResponseUser {
  per_page: number;
  total: number;
  current_page: number;
  data: User[];
}

export class ServiceListUser {
  async execute({ page, limit, ref }: ISearchParams): Promise<IResponseUser> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new UserRepository();
    const list = await repo.findAll({ page, skip, take, ref })
    return list;
  }
}


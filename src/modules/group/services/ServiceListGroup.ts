import 'reflect-metadata';
import Group from '../entities/Group';
import GroupRepository from '../repository/GroupRepository';

type ISearchParams = {
  page: number;
  limit: number;
  ref: string;
};

type IResponseGroup = {
  per_page: number;
  total: number;
  current_page: number;
  data: Group[];
};

export class ServiceListGroup {
  async execute({ page, limit, ref }: ISearchParams): Promise<IResponseGroup> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new GroupRepository();
    const list = await repo.findAll({ page, skip, take, ref });
    return list;
  }
}

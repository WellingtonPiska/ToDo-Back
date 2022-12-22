import 'reflect-metadata';
import GroupMenu from '../entities/GroupMenu';
import GroupMenuRepository from '../repository/GroupMenuRepository';

type ISearchParams = {
  page: number;
  limit: number;
  ref: string;
  search?: string;
};

type IResponseGroupMenu = {
  per_page: number;
  total: number;
  current_page: number;
  data: GroupMenu[];
};

export class ServiceListGroupMenu {
  async execute({
    page,
    limit,
    ref,
    search,
  }: ISearchParams): Promise<IResponseGroupMenu> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new GroupMenuRepository();
    const list = await repo.findAll({ page, skip, take, ref, search });
    return list;
  }
}

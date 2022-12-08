import 'reflect-metadata';
import ProfileMenu from '../entities/ProfileMenu';
import ProfileMenuRepository from '../repository/ProfileMenuRepository';

type ISearchParams = {
  page: number;
  limit: number;
};

type IResponseProfileMenu = {
  per_page: number;
  total: number;
  current_page: number;
  data: ProfileMenu[];
};

export class ServiceListProfileMenu {
  async execute({ page, limit }: ISearchParams): Promise<IResponseProfileMenu> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new ProfileMenuRepository();
    const list = await repo.findAll({ page, skip, take });
    return list;
  }
}

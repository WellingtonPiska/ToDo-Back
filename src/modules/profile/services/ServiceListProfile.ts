import 'reflect-metadata';
import Profile from '../entities/Profile';
import ProfileRepository from '../repository/ProfileRepository';

type ISearchParams = {
  page: number;
  limit: number;
  ref: string;
};

type IResponseProfile = {
  per_page: number;
  total: number;
  current_page: number;
  data: Profile[];
};

export class ServiceListProfile {
  async execute({
    page,
    limit,
    ref,
  }: ISearchParams): Promise<IResponseProfile> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new ProfileRepository();
    const list = await repo.findAll({ page, skip, take, ref });
    return list;
  }
}

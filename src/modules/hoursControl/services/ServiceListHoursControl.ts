import HoursControl from '../entities/HoursControl';
import HoursControlRepository from '../repository/HoursControlRepository';

type ISearchParams = {
  page: number;
  limit: number;
};

type IResponseHoursControl = {
  per_page: number;
  total: number;
  current_page: number;
  data: HoursControl[];
};

export class ServiceListHoursControl {
  async execute({
    page,
    limit,
  }: ISearchParams): Promise<IResponseHoursControl> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new HoursControlRepository();
    const list = await repo.findAll({ page, skip, take });

    return list;
  }
}

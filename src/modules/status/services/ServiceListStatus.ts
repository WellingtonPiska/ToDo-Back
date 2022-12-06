import Status from '../entities/Status';
import StatusRepository from '../repository/StatusRepository';

type SearchParams = {
  page: number;
  limit: number;
};

type IResponseStatus = {
  per_page: number;
  total: number;
  current_page: number;
  data: Status[];
};

export class ServiceListStatus {
  async execute({ page, limit }: SearchParams): Promise<IResponseStatus> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new StatusRepository();

    const list = await repo.findAll({
      page,
      skip,
      take,
    });
    return list;
  }
}

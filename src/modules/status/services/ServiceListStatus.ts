import StatusRepository from '../repository/StatusRepository';
import Status from '../entities/Status';

interface SearchParams {
  page: number;
  limit: number;
}

interface IResponseStatus {
  per_page: number;
  total: number;
  current_page: number;
  data: Status[];
}

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

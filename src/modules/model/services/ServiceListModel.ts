import 'reflect-metadata';
import Model from '../entities/Model';
import ModelRepository from '../repository/ModelRepository';

type ISearchParams = {
  page: number;
  limit: number;
  ref: string;
};

type IResponseModel = {
  per_page: number;
  total: number;
  current_page: number;
  data: Model[];
};

export class ServiceListModel {
  async execute({ page, limit, ref }: ISearchParams): Promise<IResponseModel> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new ModelRepository();
    const list = await repo.findAll({ page, skip, take, ref });
    return list;
  }
}

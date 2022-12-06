import 'reflect-metadata';
import Apportion from '../entities/Apportion';
import ApportionRepository from '../repository/ApportionRepository';

type ISearchParams = {
  page: number;
  limit: number;
};

type IResponseApportion = {
  per_page: number;
  total: number;
  current_page: number;
  data: Apportion[];
};

export class ServiceListApportion {
  async execute({ page, limit }: ISearchParams): Promise<IResponseApportion> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new ApportionRepository();
    const list = await repo.findAll({ page, skip, take });
    return list;
  }
}

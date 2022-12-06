import 'reflect-metadata';
import ContactType from '../entities/ContactType';
import ContactTypeRepository from '../repository/ContactTypeRepository';

type ISearchParams = {
  page: number;
  limit: number;
  ref: string;
};

type IResponseContactType = {
  per_page: number;
  total: number;
  current_page: number;
  data: ContactType[];
};

export class ServiceListContactType {
  async execute({
    page,
    limit,
    ref,
  }: ISearchParams): Promise<IResponseContactType> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new ContactTypeRepository();
    const list = await repo.findAll({ page, skip, take, ref });
    return list;
  }
}

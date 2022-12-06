import 'reflect-metadata';
import DeviceType from '../entities/DeviceType';
import DeviceTypeRepository from '../repository/DeviceTypeRepository';

type ISearchParams = {
  page: number;
  limit: number;
  ref: string;
};

type IResponseDeviceType = {
  per_page: number;
  total: number;
  current_page: number;
  data: DeviceType[];
};

export class ServiceListDeviceType {
  async execute({
    page,
    limit,
    ref,
  }: ISearchParams): Promise<IResponseDeviceType> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const repo = new DeviceTypeRepository();
    const list = await repo.findAll({ page, skip, take, ref });
    return list;
  }
}

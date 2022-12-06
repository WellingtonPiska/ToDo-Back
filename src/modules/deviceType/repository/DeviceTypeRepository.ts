import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import DeviceType from '../entities/DeviceType';

type ISearchParams = {
  page: number;
  skip: number;
  take: number;
  ref: string;
};

type IResponseDeviceType = {
  per_page: number;
  total: number;
  current_page: number;
  data: DeviceType[];
};

export default class DeviceTypeRepository {
  private repo: Repository<DeviceType>;

  constructor() {
    this.repo = dataSource.getRepository(DeviceType);
  }

  public async findAll({
    page,
    skip,
    take,
    ref,
  }: ISearchParams): Promise<IResponseDeviceType> {
    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });
    const [deviceType, count] = await this.repo
      .createQueryBuilder('device_type')
      .skip(skip)
      .take(take)
      .where('device_type.dty_status_s = :ref', { ref: status.id })
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: deviceType,
    };

    return result;
  }

  public async findById(id: string): Promise<DeviceType | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findByName(name: string): Promise<DeviceType | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string
  ): Promise<DeviceType | null> {
    const data = await this.repo
      .createQueryBuilder('device_type')
      .where('device_type.dty_id_s <> :id and device_type.dty_name_s = :name', {
        id,
        name,
      })
      .getOne();

    return data;
  }

  public async create(device_type: DeviceType): Promise<DeviceType> {
    const data = this.repo.save(device_type);
    return data;
  }

  public async update(device_type: DeviceType): Promise<DeviceType> {
    await this.repo.save(device_type);
    return device_type;
  }

  public async remove(device_type: DeviceType): Promise<void> {
    await this.repo.remove(device_type);
  }
}

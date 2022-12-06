import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Model from '../entities/Model';

type ISearchParams = {
  page: number;
  skip: number;
  take: number;
  ref: string;
};

type IResponseModel = {
  per_page: number;
  total: number;
  current_page: number;
  data: Model[];
};

export default class ModelRepository {
  private repo: Repository<Model>;

  constructor() {
    this.repo = dataSource.getRepository(Model);
  }

  public async findAll({
    page,
    skip,
    take,
    ref,
  }: ISearchParams): Promise<IResponseModel> {
    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });
    const [model, count] = await this.repo
      .createQueryBuilder('model')
      .skip(skip)
      .take(take)
      .where('model.mod_status_s = :ref', { ref: status.id })
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: model,
    };

    return result;
  }

  public async findById(id: string): Promise<Model | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findByName(name: string): Promise<Model | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string
  ): Promise<Model | null> {
    const data = await this.repo
      .createQueryBuilder('model')
      .where('model.mod_id_s <> :id and model.mod_name_s = :name', {
        id,
        name,
      })
      .getOne();

    return data;
  }

  public async create(model: Model): Promise<Model> {
    const data = this.repo.save(model);
    return data;
  }

  public async update(model: Model): Promise<Model> {
    await this.repo.save(model);
    return model;
  }

  public async remove(model: Model): Promise<void> {
    await this.repo.remove(model);
  }
}

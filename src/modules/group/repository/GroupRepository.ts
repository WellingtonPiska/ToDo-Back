import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Group from '../entities/Group';

type ISearchParams = {
  page: number;
  skip: number;
  take: number;
  ref: string;
};

type IResponseGroup = {
  per_page: number;
  total: number;
  current_page: number;
  data: Group[];
};

export default class GroupRepository {
  private repo: Repository<Group>;

  constructor() {
    this.repo = dataSource.getRepository(Group);
  }

  public async findAll({
    page,
    skip,
    take,
    ref,
  }: ISearchParams): Promise<IResponseGroup> {
    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });
    const [group, count] = await this.repo
      .createQueryBuilder('group')
      .skip(skip)
      .take(take)
      .where('group.gro_status_s = :ref', { ref: status.id })
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: group,
    };

    return result;
  }

  public async findById(id: string): Promise<Group | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findByName(name: string): Promise<Group | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string
  ): Promise<Group | null> {
    const data = await this.repo
      .createQueryBuilder('group')
      .where('group.gro_id_s <> :id and group.gro_name_s = :name', {
        id,
        name,
      })
      .getOne();

    return data;
  }

  public async create(group: Group): Promise<Group> {
    const data = this.repo.save(group);
    return data;
  }

  public async update(group: Group): Promise<Group> {
    await this.repo.save(group);
    return group;
  }

  public async remove(group: Group): Promise<void> {
    await this.repo.remove(group);
  }
}

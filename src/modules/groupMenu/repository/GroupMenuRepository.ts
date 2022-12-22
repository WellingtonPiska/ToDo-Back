import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import GroupMenu from '../entities/GroupMenu';

type ISearchParams = {
  page: number;
  skip: number;
  take: number;
  ref: string;
  search?: string;
};

type IResponseGroupMenu = {
  per_page: number;
  total: number;
  current_page: number;
  data: GroupMenu[];
};

export default class GroupMenuRepository {
  private repo: Repository<GroupMenu>;

  constructor() {
    this.repo = dataSource.getRepository(GroupMenu);
  }

  public async findAll({
    page,
    skip,
    take,
    ref,
    search,
  }: ISearchParams): Promise<IResponseGroupMenu> {
    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });
    const [groupMenu, count] = await this.repo
      .createQueryBuilder('group_menu')
      .skip(skip)
      .take(take)
      .where(qb => {
        if (search !== undefined) {
          qb.where(
            `group_menu.gme_status_s = :ref and  LOWER(group_menu.gme_name_s) like :search`,
            { ref: status.id, search: `%${search}%` }
          );
        } else {
          qb.where(`group_menu.gme_status_s = :ref `, { ref: status.id });
        }
      })
      .orderBy('group_menu.gme_name_s')
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: groupMenu,
    };

    return result;
  }

  public async findById(id: string): Promise<GroupMenu | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findByName(name: string): Promise<GroupMenu | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string
  ): Promise<GroupMenu | null> {
    const data = await this.repo
      .createQueryBuilder('group_menu')
      .where('group_menu.gme_id_s <> :id and group_menu.gme_name_s = :name', {
        id,
        name,
      })
      .getOne();

    return data;
  }

  public async create(groupMenu: GroupMenu): Promise<GroupMenu> {
    const data = this.repo.save(groupMenu);
    return data;
  }

  public async update(groupMenu: GroupMenu): Promise<GroupMenu> {
    await this.repo.save(groupMenu);
    return groupMenu;
  }

  public async remove(groupMenu: GroupMenu): Promise<void> {
    await this.repo.remove(groupMenu);
  }
}

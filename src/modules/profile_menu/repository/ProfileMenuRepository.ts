import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import ProfileMenu from '../entities/ProfileMenu';

type ISearchParams = {
  page: number;
  skip: number;
  take: number;
};

type IResponseProfileMenu = {
  per_page: number;
  total: number;
  current_page: number;
  data: ProfileMenu[];
};

export default class ProfileMenuRepository {
  private repo: Repository<ProfileMenu>;

  constructor() {
    this.repo = dataSource.getRepository(ProfileMenu);
  }
  public async findAll({
    page,
    skip,
    take,
  }: ISearchParams): Promise<IResponseProfileMenu> {
    const [profile_menu, count] = await this.repo
      .createQueryBuilder('profile_menu')
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: profile_menu,
    };
    return result;
  }
  public async findById(id: string): Promise<ProfileMenu | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findValidUpdate(id: string): Promise<ProfileMenu | null> {
    const data = await this.repo
      .createQueryBuilder('profile_menu')
      .where('profile_menu.pme_id_s <> :id ', {
        id,
      })
      .getOne();

    return data;
  }

  public async create(profileMenu: ProfileMenu): Promise<ProfileMenu> {
    const data = this.repo.save(profileMenu);
    return data;
  }

  public async update(profileMenu: ProfileMenu): Promise<ProfileMenu> {
    await this.repo.save(profileMenu);
    return profileMenu;
  }

  public async remove(profileMenu: ProfileMenu): Promise<void> {
    await this.repo.remove(profileMenu);
  }
}

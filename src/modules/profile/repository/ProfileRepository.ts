import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import Profile from '../entities/Profile';

type ISearchParams = {
  page: number;
  skip: number;
  take: number;
  ref: string;
  search?: string;
};

type IResponseProfile = {
  per_page: number;
  total: number;
  current_page: number;
  data: Profile[];
};

export default class ProfileRepository {
  private repo: Repository<Profile>;

  constructor() {
    this.repo = dataSource.getRepository(Profile);
  }

  public async findAll({
    page,
    skip,
    take,
    ref,
    search,
  }: ISearchParams): Promise<IResponseProfile> {
    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });

    const [profile, count] = await this.repo
      .createQueryBuilder('profile')
      .skip(skip)
      .take(take)
      .where(qb => {
        if (search !== undefined) {
          qb.where(
            `profile.pro_status_s = :ref and  LOWER(profile.pro_name_s) like :search`,
            { ref: status.id, search: `%${search}%` }
          );
        } else {
          qb.where(`profile.pro_status_s = :ref `, { ref: status.id });
        }
      })
      .orderBy('profile.pro_name_s')
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: profile,
    };

    return result;
  }

  public async findById(id: string): Promise<Profile | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findByName(name: string): Promise<Profile | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string
  ): Promise<Profile | null> {
    const data = await this.repo
      .createQueryBuilder('profile')
      .where('profile.pro_id_s <> :id and profile.pro_name_s = :name', {
        id,
        name,
      })
      .getOne();

    return data;
  }

  public async create(profile: Profile): Promise<Profile> {
    const data = this.repo.save(profile);
    return data;
  }

  public async update(profile: Profile): Promise<Profile> {
    await this.repo.save(profile);
    return profile;
  }

  public async remove(profile: Profile): Promise<void> {
    await this.repo.remove(profile);
  }
}

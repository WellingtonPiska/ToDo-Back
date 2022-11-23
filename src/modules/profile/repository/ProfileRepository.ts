import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/database';
import StatusRepository from '../../status/repository/StatusRepository';
import Profile from '../entities/Profile';

interface ISearchParams {
  page: number;
  skip: number;
  take: number;
  ref: string;
}

interface IResponseProfile {
  per_page: number;
  total: number;
  current_page: number;
  data: Profile[];
}

interface ICreateProfile {
  name: string;
  reference: string;
  color: string;
}

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
  }: ISearchParams): Promise<IResponseProfile> {
    const repoStatus = new StatusRepository();
    const status = await repoStatus.findByRef(ref);
    if (!status) {
      throw new Error('Status não existe')
    }
    const [profile, count] = await this.repo
      .createQueryBuilder('profile')
      .skip(skip)
      .take(take)
      .where('profile.pro_status_s = :ref', { ref: status.id })
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
    name: string,
  ): Promise<Profile | null> {
    const data = await this.repo
      .createQueryBuilder('profile')
      .where(
        'profile.pro_id_s <> :id and profile.pro_name_s = :name',
        {
          id,
          name,
        }
      )
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

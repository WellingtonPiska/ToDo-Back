import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/database';
import Sector from '../entities/Sector';

interface ISearchParams {
  page: number;
  skip: number;
  take: number;
  ref: string;
}

interface IResponseSector {
  per_page: number;
  total: number;
  current_page: number;
  data: Sector[];
}

interface ICreateSector {
  costCenter: string;
  status: string;
  name: string;
  type: string;
  obs: string;
  dn: string;
  guid: string
}

export default class SectorRepository {
  private repo: Repository<Sector>;

  constructor() {
    this.repo = dataSource.getRepository(Sector);
  }

  public async findAll({
    page,
    skip,
    take,
  }: ISearchParams): Promise<IResponseSector> {
    const [cost_center, count] = await this.repo
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: cost_center,
    };

    return result;
  }

  public async findById(id: string): Promise<Sector | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findByName(name: string): Promise<Sector | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string,
  ): Promise<Sector | null> {
    const data = await this.repo
      .createQueryBuilder('sector')
      .where(
        'sec_center.pro_id_s <> :id and sec_center.pro_name_s = :name',
        {
          id,
          name,
        }
      )
      .getOne();

    return data;
  }

  public async create(sector: Sector): Promise<Sector> {
    const data = this.repo.save(sector);
    return data;
  }

  public async update(sector: Sector): Promise<Sector> {
    await this.repo.save(sector);
    return sector;
  }

  public async remove(sector: Sector): Promise<void> {
    await this.repo.remove(sector);
  }
}

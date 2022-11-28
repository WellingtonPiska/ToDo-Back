import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/database';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
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
  guid: string;
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
    ref
  }: ISearchParams): Promise<IResponseSector> {
    const serviceFindRefStatus = new ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({ ref });
    const [cost_center, count] = await this.repo
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .where('sector.sec_status_s = :ref', { ref: status.id })
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

  public async findByGuid(guid: string): Promise<Sector | null> {
    const data = await this.repo.findOneBy({
      guid,
    });
    return data;
  }

  public async findAllByType(type: string, status: string): Promise<Sector[]> {
    const data = await this.repo
      .createQueryBuilder('sector')
      .where(`sector.sec_type_s = :type and  sector.sec_status_s = :status`, {
        type,
        status,
      })
      .getMany();
    return data;
  }

  public async findNotSyncLocaton(sync: string): Promise<Sector[] | null> {
    const data = await this.repo
      .createQueryBuilder('sector')
      .where(`sector.sec_sync_s <> :sync and sector.sec_type_s = 'L'`, {
        sync,
      })
      .getMany();
    return data;
  }

  public async findNotSyncSector(sync: string): Promise<Sector[] | null> {
    const data = await this.repo
      .createQueryBuilder('sector')
      .where(`sector.sec_sync_s <> :sync and sector.sec_type_s = 'S'`, {
        sync,
      })
      .getMany();
    return data;
  }

  public async findValidSyncLocation(name: string): Promise<Sector | null> {
    const data = await this.repo
      .createQueryBuilder('sector')
      .where(`sector.sec_name_s = :name and sector.sec_type_s = 'L'`, {
        name,
      })
      .getOne();
    return data;
  }

  public async findValidSyncSector(
    name: string,
    fatherId: string
  ): Promise<Sector | null> {
    const data = await this.repo
      .createQueryBuilder('sector')
      .where(
        `sector.sec_name_s = :name and sector.sec_type_s = 'S' and sector.sec_sector_s = :fatherId`,
        {
          name,
          fatherId,
        }
      )
      .getOne();
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string
  ): Promise<Sector | null> {
    const data = await this.repo
      .createQueryBuilder('sector')
      .where('sec_center.sec_id_s <> :id and sec_center.pro_name_s = :name', {
        id,
        name,
      })
      .getOne();

    return data;
  }

  public async create(sector: Sector): Promise<Sector> {
    const data = await this.repo.save(sector);
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

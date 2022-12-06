import 'reflect-metadata';
import { Repository } from 'typeorm';
import { dataSource } from '../../../shared/database';
import Status from '../entities/Status';

interface ISearchParams {
  page: number;
  skip: number;
  take: number;
}

interface IResponseStatus {
  per_page: number;
  total: number;
  current_page: number;
  data: Status[];
}

interface ICreateStatus {
  name: string;
  reference: string;
  color: string;
}

export default class StatusRepository {
  private repo: Repository<Status>;

  constructor() {
    this.repo = dataSource.getRepository(Status);
  }

  public async findAll({
    page,
    skip,
    take,
  }: ISearchParams): Promise<IResponseStatus> {
    const [status, count] = await this.repo
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: status,
    };

    return result;
  }

  public async findById(id: string): Promise<Status | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findByName(name: string): Promise<Status | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findByRef(reference: string): Promise<Status | null> {
    const data = await this.repo.findOneBy({
      reference,
    });
    return data;
  }

  public async findValid(
    name: string,
    reference: string
  ): Promise<Status | null> {
    const data = await this.repo.findOneBy({
      name,
      reference,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string,
    reference: string
  ): Promise<Status | null> {
    const data = await this.repo
      .createQueryBuilder('status')
      .where(
        'status.sta_id_s <> :id and (status.sta_name_s = :name or status.sta_ref_s = :reference)',
        {
          id,
          name,
          reference,
        }
      )
      .getOne();

    return data;
  }

  public async create(status: Status): Promise<Status> {
    const data = this.repo.create(status);
    await this.repo.save(status);
    return data;
  }

  public async update(status: Status): Promise<Status> {
    await this.repo.save(status);
    return status;
  }

  public async remove(status: Status): Promise<void> {
    await this.repo.remove(status);
  }
}

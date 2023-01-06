import 'reflect-metadata';
import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import HoursControl from '../entities/HoursControl';

type ISearchParams = {
  page: number;
  skip: number;
  take: number;
};

type IResponseHoursControl = {
  per_page: number;
  total: number;
  current_page: number;
  data: HoursControl[];
};

export default class FormRepository {
  private repo: Repository<HoursControl>;

  constructor() {
    this.repo = dataSource.getRepository(HoursControl);
  }

  public async findAll({
    page,
    skip,
    take,
  }: ISearchParams): Promise<IResponseHoursControl> {
    const [hoursControl, count] = await this.repo
      .createQueryBuilder('hours_control')
      .skip(skip)
      .take(take)
      .getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: hoursControl,
    };

    return result;
  }

  public async findValidUpdate(
    id: string,
    dateEnd: string,
    dateStart: string
  ): Promise<HoursControl | null> {
    const data = await this.repo
      .createQueryBuilder('hours_control')
      .where(
        'hours_control.hco_id_s <> :id and (hours_control.hco_date_start_s = :date_start OR hours_control.hco_date_end_s = :date_end)',
        {
          id,
          dateEnd,
          dateStart,
        }
      )
      .getOne();

    return data;
  }

  public async findById(
    id: string,
    project: string,
    tasks: string
  ): Promise<HoursControl | null> {
    const data = await this.repo.findOneBy({
      id,
      project,
      tasks,
    });
    return data;
  }

  public async create(hoursControl: HoursControl): Promise<HoursControl> {
    const data = this.repo.create(hoursControl);
    await this.repo.save(hoursControl);
    return data;
  }

  public async update(hoursControl: HoursControl): Promise<HoursControl> {
    await this.repo.save(hoursControl);
    return hoursControl;
  }

  public async remove(hoursControl: HoursControl): Promise<void> {
    await this.repo.remove(hoursControl);
  }
}

import 'reflect-metadata';
import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import HoursControl from '../entities/HoursControl';

export default class FormRepository {
  private repo: Repository<HoursControl>;

  constructor() {
    this.repo = dataSource.getRepository(HoursControl);
  }

  public async findAll(): Promise<HoursControl[]> {
    const result = await this.repo.find();
    return result;
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

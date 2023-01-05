import 'reflect-metadata';
import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import Sections from '../entities/Sections';

export default class FormRepository {
  private repo: Repository<Sections>;

  constructor() {
    this.repo = dataSource.getRepository(Sections);
  }

  public async findAll(): Promise<Sections[]> {
    const result = await this.repo.find();
    return result;
  }

  public async findById(id: string): Promise<Sections | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findByName(name: string): Promise<Sections | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string
  ): Promise<Sections | null> {
    const data = await this.repo
      .createQueryBuilder('sections')
      .where('sections.sec_id_s <> :id and (sections.sec_name_s = :name )', {
        id,
        name,
      })
      .getOne();

    return data;
  }

  public async create(sections: Sections): Promise<Sections> {
    const data = this.repo.create(sections);
    await this.repo.save(sections);
    return data;
  }

  public async update(sections: Sections): Promise<Sections> {
    await this.repo.save(sections);
    return sections;
  }

  public async remove(sections: Sections): Promise<void> {
    await this.repo.remove(sections);
  }
}

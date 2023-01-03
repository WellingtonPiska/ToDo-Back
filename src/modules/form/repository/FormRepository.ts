import 'reflect-metadata';
import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import Form from '../entities/Form';

export default class FormRepository {
  private repo: Repository<Form>;

  constructor() {
    this.repo = dataSource.getRepository(Form);
  }

  public async findAll(): Promise<Form[]> {
    const result = await this.repo.find();
    return result;
  }

  public async findById(id: string): Promise<Form | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findByTitle(title: string): Promise<Form | null> {
    const data = await this.repo.findOneBy({
      title,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    title: string,
    description: string
  ): Promise<Form | null> {
    const data = await this.repo
      .createQueryBuilder('form')
      .where(
        'form.for_id_s <> :id and (form.for_title_s = :title or form.for_description_s = :description)',
        {
          id,
          title,
          description,
        }
      )
      .getOne();

    return data;
  }

  public async create(form: Form): Promise<Form> {
    const data = this.repo.create(form);
    await this.repo.save(form);
    return data;
  }

  public async update(form: Form): Promise<Form> {
    await this.repo.save(form);
    return form;
  }

  public async remove(form: Form): Promise<void> {
    await this.repo.remove(form);
  }
}

import 'reflect-metadata';
import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import Tasks from '../entities/Tasks';

export default class TasksRepository {
  private repo: Repository<Tasks>;

  constructor() {
    this.repo = dataSource.getRepository(Tasks);
  }

  public async findAll(): Promise<Tasks[]> {
    const result = await this.repo.find();
    return result;
  }

  public async findById(id: string): Promise<Tasks | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    project: string,
    title: string
  ): Promise<Tasks | null> {
    const data = await this.repo
      .createQueryBuilder('tasks')
      .where(
        'tasks.tas_id_s <> :id and (tasks.tas_project_s = :project and tasks.tas_title_s = :title )',
        {
          id,
          project,
          title,
        }
      )
      .getOne();

    return data;
  }

  public async create(tasks: Tasks): Promise<Tasks> {
    const data = this.repo.create(tasks);
    await this.repo.save(tasks);
    return data;
  }

  public async update(tasks: Tasks): Promise<Tasks> {
    await this.repo.save(tasks);
    return tasks;
  }

  public async remove(tasks: Tasks): Promise<void> {
    await this.repo.remove(tasks);
  }
}

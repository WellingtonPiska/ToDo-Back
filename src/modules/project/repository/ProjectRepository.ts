import 'reflect-metadata';
import { Repository } from 'typeorm';

import { dataSource } from '../../../shared/database';
import Project from '../entities/Project';

export default class ProjectRepository {
  private repo: Repository<Project>;

  constructor() {
    this.repo = dataSource.getRepository(Project);
  }

  public async findAll(): Promise<Project[]> {
    const result = await this.repo.find();
    return result;
  }

  public async findById(id: string): Promise<Project | null> {
    const data = await this.repo.findOneBy({
      id,
    });
    return data;
  }

  public async findByName(name: string): Promise<Project | null> {
    const data = await this.repo.findOneBy({
      name,
    });
    return data;
  }

  public async findValidUpdate(
    id: string,
    name: string
  ): Promise<Project | null> {
    const data = await this.repo
      .createQueryBuilder('project')
      .where('project.pro_id_s <> :id and (project.pro_name_s = :name )', {
        id,
        name,
      })
      .getOne();

    return data;
  }

  public async create(project: Project): Promise<Project> {
    const data = this.repo.create(project);
    await this.repo.save(project);
    return data;
  }

  public async update(project: Project): Promise<Project> {
    await this.repo.save(project);
    return project;
  }

  public async remove(project: Project): Promise<void> {
    await this.repo.remove(project);
  }
}

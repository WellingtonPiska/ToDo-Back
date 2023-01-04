import Project from '../entities/Project';
import ProjectRepository from '../repository/ProjectRepository';

export class ServiceListProject {
  async execute(): Promise<Project[]> {
    const repo = new ProjectRepository();
    const list = await repo.findAll();

    return list;
  }
}

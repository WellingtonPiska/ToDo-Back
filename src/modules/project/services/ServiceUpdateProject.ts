import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import Project from '../entities/Project';
import ProjectRepository from '../repository/ProjectRepository';
import { ServiceFindProject } from './ServiceFindProject';

type IUpdateProject = {
  id: string;
  name: string;
  description: string;
  user: string;
};

export class ServiceUpdateProject {
  async execute({
    id,
    name,
    description,
    user,
  }: IUpdateProject): Promise<Project> {
    const repo = new ProjectRepository();

    const serviceFindUser = new ServiceFindUser();
    const userRef = await serviceFindUser.execute({ id: user });

    const serviceFindProject = new ServiceFindProject();
    const project = await serviceFindProject.execute({ id });

    const projectValid = await repo.findValidUpdate(id, name);

    if (projectValid) {
      throw new Error('Projeto duplicado');
    }

    project.name = name;
    project.description = description;
    project.user = userRef.id;
    await repo.update(project);
    return project;
  }
}

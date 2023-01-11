import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import Project from '../entities/Project';
import ProjectRepository from '../repository/ProjectRepository';
import { ServiceFindProject } from './ServiceFindProject';

type IUpdateProject = {
  id: string;
  name: string;
  description: string;
  responsible: string;
  order: number;
};

export class ServiceUpdateProject {
  async execute({
    id,
    name,
    description,
    responsible,
    order,
  }: IUpdateProject): Promise<Project> {
    const repo = new ProjectRepository();

    const serviceFindUser = new ServiceFindUser();
    const responsibleRef = await serviceFindUser.execute({ id: responsible });

    const serviceFindProject = new ServiceFindProject();
    const project = await serviceFindProject.execute({ id });

    const projectValid = await repo.findValidUpdate(id, name);

    if (projectValid) {
      throw new Error('Projeto duplicado');
    }

    project.name = name;
    project.description = description;
    project.responsible = responsibleRef.id;
    project.order = order;
    await repo.update(project);
    return project;
  }
}

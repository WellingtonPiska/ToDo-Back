import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import Project from '../entities/Project';
import ProjectRepository from '../repository/ProjectRepository';

type ICreateProject = {
  name: string;
  description: string;
  responsible: string;
  order: number;
};

export class ServiceCreateProject {
  async execute({
    name,
    description,
    responsible,
    order,
  }: ICreateProject): Promise<Project> {
    const repo = new ProjectRepository();

    const projectValid = await repo.findByName(name);

    if (projectValid) {
      throw new Error('O Formulário já existe');
    }

    const serviceFindUser = new ServiceFindUser();
    const responsibleRef = await serviceFindUser.execute({ id: responsible });

    const project = new Project();
    project.name = name;
    project.description = description;
    project.responsible = responsibleRef.id;
    project.order = order;
    const obj = await repo.create(project);

    return obj;
  }
}

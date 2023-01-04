import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import Project from '../entities/Project';
import ProjectRepository from '../repository/ProjectRepository';

type ICreateProject = {
  name: string;
  description: string;
  user: string;
};

export class ServiceCreateProject {
  async execute({ name, description, user }: ICreateProject): Promise<Project> {
    const repo = new ProjectRepository();

    const projectValid = await repo.findByName(name);

    if (projectValid) {
      throw new Error('O Formulário já existe');
    }

    const serviceFindUser = new ServiceFindUser();
    const userRef = await serviceFindUser.execute({ id: user });

    const project = new Project();
    project.name = name;
    project.description = description;
    project.user = userRef.id;
    const obj = await repo.create(project);

    return obj;
  }
}

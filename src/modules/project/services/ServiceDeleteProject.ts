import ProjectRepository from '../repository/ProjectRepository';
import { ServiceFindProject } from './ServiceFindProject';

type IDeleteProject = {
  id: string;
};

export class ServiceDeleteProject {
  async execute({ id }: IDeleteProject): Promise<boolean> {
    const repo = new ProjectRepository();
    const serviceFindProject = new ServiceFindProject();
    const project = await serviceFindProject.execute({ id });
    await repo.remove(project);
    return true;
  }
}

import Project from '../entities/Project';
import ProjectRepository from '../repository/ProjectRepository';

type IFindProject = {
  id: string;
};

export class ServiceFindProject {
  async execute({ id }: IFindProject): Promise<Project> {
    const repo = new ProjectRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new Error('Projeto não encontrado!');
    }

    return data;
  }
}

import Tasks from '../entities/Tasks';
import TasksRepository from '../repository/TasksRepository';

type IListTasks = {
  project: string;
  sections: string;
};

export class ServiceListTasks {
  async execute({ project, sections }: IListTasks): Promise<Tasks[]> {
    const repo = new TasksRepository();
    const list = await repo.findAll(project, sections);

    return list;
  }
}

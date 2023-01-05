import Tasks from '../entities/Tasks';
import TasksRepository from '../repository/TasksRepository';

export class ServiceListTasks {
  async execute(): Promise<Tasks[]> {
    const repo = new TasksRepository();
    const list = await repo.findAll();

    return list;
  }
}

import TasksRepository from '../repository/TasksRepository';
import { ServiceFindTasks } from './ServiceFindTasks';

type IDeleteTasks = {
  id: string;
};

export class ServiceDeleteTasks {
  async execute({ id }: IDeleteTasks): Promise<boolean> {
    const repo = new TasksRepository();
    const serviceFindTasks = new ServiceFindTasks();
    const tasks = await serviceFindTasks.execute({ id });
    await repo.remove(tasks);
    return true;
  }
}

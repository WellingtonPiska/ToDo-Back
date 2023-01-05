import Tasks from '../entities/Tasks';
import TasksRepository from '../repository/TasksRepository';

type IFindTasks = {
  id: string;
};

export class ServiceFindTasks {
  async execute({ id }: IFindTasks): Promise<Tasks> {
    const repo = new TasksRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new Error('Tarefa não encontrada!');
    }

    return data;
  }
}

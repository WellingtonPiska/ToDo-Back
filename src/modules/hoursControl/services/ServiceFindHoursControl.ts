import HoursControl from '../entities/HoursControl';
import HoursControlRepository from '../repository/HoursControlRepository';

type IFindHoursControl = {
  id: string;
  project: string;
  tasks: string;
  user: string;
};

export class ServiceFindHoursControl {
  async execute({
    id,
    project,
    tasks,
    user,
  }: IFindHoursControl): Promise<HoursControl> {
    const repo = new HoursControlRepository();

    const data = await repo.findById(id, project, tasks, user);

    if (!data) {
      throw new Error('Usuário não encontrado');
    }

    return data;
  }
}

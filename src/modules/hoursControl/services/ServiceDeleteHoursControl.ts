import HoursControlRepository from '../repository/HoursControlRepository';
import { ServiceFindHoursControl } from './ServiceFindHoursControl';

type IDeleteHoursControl = {
  id: string;
  tasks: string;
  project: string;
};

export class ServiceDeleteHoursControl {
  async execute({ id, tasks, project }: IDeleteHoursControl): Promise<boolean> {
    const repo = new HoursControlRepository();
    const serviceFindHoursControl = new ServiceFindHoursControl();
    const hoursControl = await serviceFindHoursControl.execute({
      id,
      tasks,
      project,
    });
    await repo.remove(hoursControl);
    return true;
  }
}

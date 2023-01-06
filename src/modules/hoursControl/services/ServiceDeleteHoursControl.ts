import HoursControlRepository from '../repository/HoursControlRepository';
import { ServiceFindHoursControl } from './ServiceFindHoursControl';

type IDeleteHoursControl = {
  id: string;
  tasks: string;
  project: string;
  user: string;
};

export class ServiceDeleteHoursControl {
  async execute({
    id,
    tasks,
    project,
    user,
  }: IDeleteHoursControl): Promise<boolean> {
    const repo = new HoursControlRepository();
    const serviceFindHoursControl = new ServiceFindHoursControl();
    const hoursControl = await serviceFindHoursControl.execute({
      id,
      tasks,
      project,
      user,
    });
    await repo.remove(hoursControl);
    return true;
  }
}

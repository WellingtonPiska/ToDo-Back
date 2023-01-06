import { ServiceFindProject } from '../../project/services/ServiceFindProject';
import { ServiceFindTasks } from '../../tasks/services/ServiceFindTasks';
import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import HoursControl from '../entities/HoursControl';
import HoursControlRepository from '../repository/HoursControlRepository';
import { ServiceFindHoursControl } from './ServiceFindHoursControl';

type IUpdateHoursControl = {
  id: string;
  tasks: string;
  project: string;
  dateStart: string;
  dateEnd: string;
  user: string;
};

export class ServiceUpdateHoursControl {
  async execute({
    id,
    tasks,
    project,
    dateEnd,
    dateStart,
    user,
  }: IUpdateHoursControl): Promise<HoursControl> {
    const repo = new HoursControlRepository();

    const serviceFindHoursControl = new ServiceFindHoursControl();
    const hoursControl = await serviceFindHoursControl.execute({
      id,
      project,
      tasks,
      user,
    });

    const serviceFindProject = new ServiceFindProject();
    const projectRef = await serviceFindProject.execute({ id: project });

    const serviceFindTasks = new ServiceFindTasks();
    const tasksRef = await serviceFindTasks.execute({ id: tasks });

    const serviceFindUser = new ServiceFindUser();
    const userRef = await serviceFindUser.execute({ id: user });

    hoursControl.dateEnd = dateEnd;
    hoursControl.dateStart = dateStart;
    hoursControl.project = projectRef.id;
    hoursControl.tasks = tasksRef.id;
    hoursControl.user = userRef.id;
    await repo.update(hoursControl);
    return hoursControl;
  }
}

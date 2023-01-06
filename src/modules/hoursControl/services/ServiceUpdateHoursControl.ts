import { ServiceFindProject } from '../../project/services/ServiceFindProject';
import { ServiceFindTasks } from '../../tasks/services/ServiceFindTasks';
import HoursControl from '../entities/HoursControl';
import HoursControlRepository from '../repository/HoursControlRepository';
import { ServiceFindHoursControl } from './ServiceFindHoursControl';

type IUpdateHoursControl = {
  id: string;
  tasks: string;
  project: string;
  dateStart: string;
  dateEnd: string;
};

export class ServiceUpdateHoursControl {
  async execute({
    id,
    tasks,
    project,
    dateEnd,
    dateStart,
  }: IUpdateHoursControl): Promise<HoursControl> {
    const repo = new HoursControlRepository();

    const serviceFindHoursControl = new ServiceFindHoursControl();
    const hoursControl = await serviceFindHoursControl.execute({
      id,
      project,
      tasks,
    });

    const serviceFindProject = new ServiceFindProject();
    const projectRef = await serviceFindProject.execute({ id: project });

    const serviceFindTasks = new ServiceFindTasks();
    const tasksRef = await serviceFindTasks.execute({ id });

    const hoursControlValid = await repo.findValidUpdate(
      id,
      dateStart,
      dateEnd
    );

    if (hoursControlValid) {
      throw new Error('hoursControlulário duplicado');
    }

    hoursControl.dateEnd = dateEnd;
    hoursControl.dateStart = dateStart;
    hoursControl.project = projectRef.id;
    hoursControl.tasks = tasksRef.id;
    await repo.update(hoursControl);
    return hoursControl;
  }
}

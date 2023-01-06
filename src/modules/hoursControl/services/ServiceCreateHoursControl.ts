import { ServiceFindProject } from '../../project/services/ServiceFindProject';
import { ServiceFindTasks } from '../../tasks/services/ServiceFindTasks';
import HoursControl from '../entities/HoursControl';
import HoursControlRepository from '../repository/HoursControlRepository';

type ICreateHoursControl = {
  dateStart: string;
  dateEnd: string;
  project: string;
  tasks: string;
};

export class ServiceCreateHoursControl {
  async execute({
    dateEnd,
    dateStart,
    project,
    tasks,
  }: ICreateHoursControl): Promise<HoursControl> {
    const repo = new HoursControlRepository();

    const serviceFindProject = new ServiceFindProject();
    const projectRef = await serviceFindProject.execute({ id: project });

    const serviceFindTasks = new ServiceFindTasks();
    const tasksRef = await serviceFindTasks.execute({ id: tasks });

    const hoursControl = new HoursControl();
    hoursControl.dateEnd = dateEnd;
    hoursControl.dateStart = dateStart;
    hoursControl.project = projectRef.id;
    hoursControl.tasks = tasksRef.id;
    const obj = await repo.create(hoursControl);

    return obj;
  }
}

import { ServiceFindProject } from '../../project/services/ServiceFindProject';
import { ServiceFindSections } from '../../sections/services/ServiceFindSections';
import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import Tasks from '../entities/Tasks';
import TasksRepository from '../repository/TasksRepository';
import { ServiceFindTasks } from './ServiceFindTasks';

type IUpdateTasks = {
  id: string;
  percentage: number;
  situation: string;
  title: string;
  description: string;
  responsible: string;
  project: string;
  sections: string;
  order: number;
  priority: string;
};

export class ServiceUpdateTasks {
  async execute({
    id,
    title,
    description,
    responsible,
    percentage,
    situation,
    project,
    sections,
    order,
    priority,
  }: IUpdateTasks): Promise<Tasks> {
    const repo = new TasksRepository();

    const serviceFindUser = new ServiceFindUser();
    const responsibleRef = await serviceFindUser.execute({ id: responsible });

    const serviceFindProject = new ServiceFindProject();
    const projectRef = await serviceFindProject.execute({ id: project });

    const serviceFindSections = new ServiceFindSections();
    const sectionsRef = await serviceFindSections.execute({
      id: sections,
      project,
    });

    const serviceFindTasks = new ServiceFindTasks();
    const tasks = await serviceFindTasks.execute({ id });

    const tasksValid = await repo.findValidUpdate(id, project, title);

    if (tasksValid) {
      throw new Error('Projeto duplicado');
    }

    tasks.order = order;
    tasks.title = title;
    tasks.description = description;
    tasks.situation = situation;
    tasks.percentage = percentage;
    tasks.project = projectRef.id;
    tasks.sections = sectionsRef.id;
    tasks.responsible = responsibleRef.id;
    tasks.priority = priority;
    await repo.update(tasks);
    return tasks;
  }
}

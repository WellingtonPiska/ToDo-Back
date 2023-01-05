import { ServiceFindProject } from '../../project/services/ServiceFindProject';
import { ServiceFindSections } from '../../sections/services/ServiceFindSections';
import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import Tasks from '../entities/Tasks';
import TasksRepository from '../repository/TasksRepository';

type ICreateTasks = {
  title: string;
  situation: string;
  description: string;
  percentage: number;
  responsible: string;
  project: string;
  sections: string;
  order: number;
};

export class ServiceCreateTasks {
  async execute({
    title,
    description,
    responsible,
    project,
    sections,
    situation,
    percentage,
    order,
  }: ICreateTasks): Promise<Tasks> {
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

    const tasks = new Tasks();
    tasks.title = title;
    tasks.description = description;
    tasks.responsible = responsibleRef.id;
    tasks.project = projectRef.id;
    tasks.sections = sectionsRef.id;
    tasks.situation = situation;
    tasks.percentage = percentage;
    tasks.order = order;

    const obj = await repo.create(tasks);

    return obj;
  }
}

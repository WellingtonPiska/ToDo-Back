import { ServiceFindProject } from '../../project/services/ServiceFindProject';
import Sections from '../entities/Sections';
import SectionsRepository from '../repository/SectionsRepository';

type ICreateSections = {
  name: string;
  project: string;
  order: number;
  color: string;
};

export class ServiceCreateSections {
  async execute({
    name,
    project,
    order,
    color,
  }: ICreateSections): Promise<Sections> {
    const repo = new SectionsRepository();

    const projectValid = await repo.findByName(name);

    if (projectValid) {
      throw new Error('O Formulário já existe');
    }

    const serviceFindProject = new ServiceFindProject();
    const projectRef = await serviceFindProject.execute({ id: project });

    const sections = new Sections();
    sections.name = name;
    sections.project = projectRef.id;
    sections.order = order;
    sections.color = color;
    const obj = await repo.create(sections);

    return obj;
  }
}

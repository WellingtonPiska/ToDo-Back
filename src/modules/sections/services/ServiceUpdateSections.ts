import { ServiceFindProject } from '../../project/services/ServiceFindProject';
import Sections from '../entities/Sections';
import SectionsRepository from '../repository/SectionsRepository';
import { ServiceFindSections } from './ServiceFindSections';

type IUpdateSections = {
  id: string;
  name: string;
  order: number;
  project: string;
};

export class ServiceUpdateSections {
  async execute({
    id,
    name,
    order,
    project,
  }: IUpdateSections): Promise<Sections> {
    const repo = new SectionsRepository();

    const serviceFindProject = new ServiceFindProject();
    const projectRef = await serviceFindProject.execute({ id: project });

    const serviceFindSections = new ServiceFindSections();
    const sections = await serviceFindSections.execute({ id });

    const projectValid = await repo.findValidUpdate(id, name);

    if (projectValid) {
      throw new Error('Setor duplicado');
    }

    sections.name = name;
    sections.order = order;
    sections.project = projectRef.id;
    await repo.update(sections);
    return sections;
  }
}

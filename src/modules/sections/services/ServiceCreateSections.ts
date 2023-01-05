import { ServiceFindProject } from '../../project/services/ServiceFindProject';
import Sections from '../entities/Sections';
import SectionsRepository from '../repository/SectionsRepository';

type ICreateSections = {
  name: string;
  project: string;
  order: number;
};

export class ServiceCreateSections {
  async execute({ name, project, order }: ICreateSections): Promise<Sections> {
    const repo = new SectionsRepository();

    const projectValid = await repo.findByName(name);

    if (projectValid) {
      throw new Error('O Formulário já existe');
    }

    const serviceFindUser = new ServiceFindProject();
    const projectRef = await serviceFindUser.execute({ id: project });

    const sections = new Sections();
    sections.name = name;
    sections.project = projectRef.id;
    sections.order = order;
    const obj = await repo.create(sections);

    return obj;
  }
}

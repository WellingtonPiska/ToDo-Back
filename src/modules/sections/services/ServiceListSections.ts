import Sections from '../entities/Sections';
import SectionsRepository from '../repository/SectionsRepository';

export class ServiceListSections {
  async execute(project: string): Promise<Sections[]> {
    const repo = new SectionsRepository();
    const list = await repo.findAll(project);

    return list;
  }
}

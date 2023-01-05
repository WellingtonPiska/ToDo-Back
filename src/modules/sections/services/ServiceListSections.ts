import Sections from '../entities/Sections';
import SectionsRepository from '../repository/SectionsRepository';

export class ServiceListSections {
  async execute(): Promise<Sections[]> {
    const repo = new SectionsRepository();
    const list = await repo.findAll();

    return list;
  }
}

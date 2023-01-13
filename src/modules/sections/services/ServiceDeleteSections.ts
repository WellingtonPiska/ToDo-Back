import SectionsRepository from '../repository/SectionsRepository';
import { ServiceFindSections } from './ServiceFindSections';

type IDeleteSections = {
  id: string;
  project: string;
};

export class ServiceDeleteSections {
  async execute({ id, project }: IDeleteSections): Promise<boolean> {
    const repo = new SectionsRepository();
    const serviceFindSections = new ServiceFindSections();
    const sections = await serviceFindSections.execute({ id, project });
    await repo.remove(sections);
    return true;
  }
}

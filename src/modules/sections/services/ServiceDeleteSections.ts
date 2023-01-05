import SectionsRepository from '../repository/SectionsRepository';
import { ServiceFindSections } from './ServiceFindSections';

type IDeleteSections = {
  id: string;
};

export class ServiceDeleteSections {
  async execute({ id }: IDeleteSections): Promise<boolean> {
    const repo = new SectionsRepository();
    const serviceFindSections = new ServiceFindSections();
    const sections = await serviceFindSections.execute({ id });
    await repo.remove(sections);
    return true;
  }
}

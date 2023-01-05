import Sections from '../entities/Sections';
import SectionsRepository from '../repository/SectionsRepository';

type IFindSections = {
  id: string;
  project: string;
};

export class ServiceFindSections {
  async execute({ id, project }: IFindSections): Promise<Sections> {
    const repo = new SectionsRepository();

    const data = await repo.findById(id, project);

    if (!data) {
      throw new Error('Seção não encontrada!');
    }

    return data;
  }
}

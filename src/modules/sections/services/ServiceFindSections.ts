import Sections from '../entities/Sections';
import SectionsRepository from '../repository/SectionsRepository';

type IFindSections = {
  id: string;
};

export class ServiceFindSections {
  async execute({ id }: IFindSections): Promise<Sections> {
    const repo = new SectionsRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new Error('Setor não encontrado!');
    }

    return data;
  }
}

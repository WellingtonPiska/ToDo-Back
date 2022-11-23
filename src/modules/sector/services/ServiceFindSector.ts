import SectorRepository from "../repository/SectorRepository";

interface IFindSector {
  id: string;
}

export class ServiceFindSector {
  async execute({ id }: IFindSector) {
    const repo = new SectorRepository();

    const data = await repo.findById(id)

    if (!data) {
      throw new Error('Sector não encontrado')
    }
    return data;
  }
}

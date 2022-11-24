import Sector from "../entities/Sector";
import SectorRepository from "../repository/SectorRepository";

interface IFindSector {
  id: string;
}

export class ServiceFindSector {
  async execute({ id }: IFindSector): Promise<Sector> {
    const repo = new SectorRepository();

    const data = await repo.findById(id)

    if (!data) {
      throw new Error('Sector não encontrado')
    }
    return data;
  }
}

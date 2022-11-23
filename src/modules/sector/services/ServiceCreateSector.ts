import StatusRepository from "../../status/repository/StatusRepository";
import SectorRepository from "../repository/SectorRepository";

interface ICreateSector {
  name: string;
  obs: string;
  type: string;
  dn?: string;
  guid?: string;
  status: string;
  sectorFather?: string;
  costCenter?: string;
}

export class ServiceCreateSector {
  async execute({ name, obs, type, dn, guid, status, sectorFather, costCenter }: ICreateSector) {
    const repo = new SectorRepository();

    const repoStatus = new StatusRepository();

    const statusRef = await repoStatus.findById(status);

    if (!statusRef) {
      throw new Error('Status não cadastrado')
    }



    const sectorValid = await repo.findByName(name);

    if (sectorValid) {
      throw new Error('Sector já existe');
    }

  }
}

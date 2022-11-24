import 'dotenv/config';
import ldap from '../../../config/axios/ldap';
import SectorRepository from '../../sector/repository/SectorRepository';
import StatusRepository from '../../status/repository/StatusRepository';
import Sector from '../../sector/entities/Sector';
import { v4 as uuid } from 'uuid';

interface IResponseSyncSector {
  name: string;
  dn: string;
  guid: string;
}

interface ILdapOu {
  name: string;
  distinguishedName: string;
  objectGUID: string;
}

export class ServiceSyncLocation {
  async execute(): Promise<void> {
    const param = {
      ou: process.env.LDAP_DN,
      subou: false,
    };
    const sync = uuid();

    const res = await ldap.post('/ldap/ou/list', param);
    if (res.status == 200) {
      const repo = new SectorRepository();
      const repoStatus = new StatusRepository();

      const obs = 'Registro adicionado pela sincronização.';
      const type = 'L';
      const costCenter = undefined;
      const sectorFather = undefined;

      const dataStatus = await repoStatus.findByRef('P');

      if (!dataStatus) {
        throw Error('Status não cadastrado');
      }

      res.data.forEach(
        async ({ name, distinguishedName, objectGUID }: ILdapOu) => {
          let sector = await repo.findByGuid(objectGUID);

          if (sector) {
            //UPDATE
            sector.name = name;
            sector.dn = distinguishedName;
            sector.sync = sync;
            await repo.update(sector);
          } else {
            //INSERT
            const sectorValid = await repo.findValidSyncLocation(name);

            if (!sectorValid) {
              const add = new Sector();
              add.name = name;
              add.obs = obs;
              add.type = type;
              add.status = dataStatus.id;
              add.costCenter = costCenter;
              add.sectorFather = sectorFather;
              add.dn = distinguishedName;
              add.guid = objectGUID;
              add.sync = sync;
              await repo.create(add);
            }
          }
        }
      );
    } else {
      throw Error('Erro na sincronização de locais.');
    }
  }
}

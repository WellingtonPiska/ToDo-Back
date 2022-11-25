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
  status: number;
  data: [
    {
      name: string;
      distinguishedName: string;
      objectGUID: string;
    }
  ];
}

export class ServiceSyncSector {
  async execute(): Promise<void> {
    const repo = new SectorRepository();
    const repoStatus = new StatusRepository();
    const dataStatus = await repoStatus.findByRef('A');
    const obs = 'Registro adicionado pela sincronização.';
    const type = 'S';
    const sync = uuid();

    if (!dataStatus) {
      throw Error('Status não cadastrado');
    }

    const list = await repo.findAllByType('L', dataStatus.id);

    for (const { id, dn } of list) {
      const fatherId = id;
      const param = {
        ou: dn,
        subou: false,
      };

      const res = await ldap.post('/ldap/ou/list', param);
      if (res.status == 200) {
        for (const { name, distinguishedName, objectGUID } of res.data) {
          const sector = await repo.findByGuid(objectGUID);
          if (sector) {
            sector.name = name;
            sector.dn = distinguishedName;
            sector.sync = sync;
            await repo.update(sector);
          } else {
            const sectorValid = await repo.findValidSyncSector(name, fatherId);

            if (!sectorValid) {
              const add = new Sector();
              add.name = name;
              add.obs = obs;
              add.type = type;
              add.status = dataStatus.id;
              add.sectorFather = fatherId;
              add.dn = distinguishedName;
              add.guid = objectGUID;
              add.sync = sync;
              await repo.create(add);
            }
          }
        }
      } else {
        throw Error('Erro na sincronização de setores.');
      }
    }
    const remove = await repo.findNotSyncSector(sync);
    if (remove) {
      for (const rem of remove) {
        const remStatus = await repoStatus.findByRef('I');
        if (remStatus) {
          rem.status = remStatus?.id;
          await repo.update(rem);
        }
      }
    }
  }
}

import 'dotenv/config';
import { v4 as uuid } from 'uuid';
import { string } from 'yup';

import ldap from '../../../config/axios/ldap';
import Sector from '../../sector/entities/Sector';
import SectorRepository from '../../sector/repository/SectorRepository';
import StatusRepository from '../../status/repository/StatusRepository';

type ILdapOu = {
  status: number;
  data: [
    {
      name: string;
      distinguishedName: string;
      objectGUID: string;
    }
  ];
};

export class ServiceSyncLocation {
  async execute(): Promise<void> {
    try {
      const param = {
        ou: 'OU=Locais,OU=Administracao-TI,DC=hcampodoro,DC=com,DC=br',
        subou: false,
      };
      const sync = uuid();
      const res = await ldap.post('/ldap/ou/list', param);

      if (res.status === 200) {
        const repo = new SectorRepository();
        const repoStatus = new StatusRepository();

        const obs = 'Registro adicionado pela sincronização.';
        const type = 'L';
        const dataStatus = await repoStatus.findByRef('A');

        if (!dataStatus) {
          throw Error('Status não cadastrado');
        }

        for (const { name, distinguishedName, objectGUID } of res.data) {
          const sector = await repo.findByGuid(objectGUID);

          if (sector) {
            // UPDATE
            sector.name = name;
            sector.dn = distinguishedName;
            sector.sync = sync;
            await repo.update(sector);
          } else {
            // INSERT
            const sectorValid = await repo.findValidSyncLocation(name);
            if (!sectorValid) {
              const add = new Sector();
              add.name = name;
              add.obs = obs;
              add.type = type;
              add.status = dataStatus.id;
              add.dn = distinguishedName;
              add.guid = objectGUID;
              add.sync = sync;
              await repo.create(add);
            }
          }
        }
        const remove = await repo.findNotSyncLocaton(sync);
        if (remove) {
          for (const rem of remove) {
            const remStatus = await repoStatus.findByRef('I');
            if (remStatus) {
              rem.status = remStatus?.id;
              await repo.update(rem);
            }
          }
        }
      } else {
        throw new Error('Erro na sincronização de locais.');
      }
    } catch (error: any) {
      throw new Error(error.response.data);
    }
  }
}

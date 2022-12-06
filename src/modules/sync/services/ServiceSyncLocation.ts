import 'dotenv/config';
import { v4 as uuid } from 'uuid';

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
    const param = {
      ou: process.env.LDAP_DN,
      subou: false,
    };
    const sync = uuid();
    const res = (await ldap.post('/ldap/ou/list', param)) as ILdapOu;

    if (res.status === 200) {
      const repo = new SectorRepository();
      const repoStatus = new StatusRepository();

      const obs = 'Registro adicionado pela sincronização.';
      const type = 'L';
      const dataStatus = await repoStatus.findByRef('A');

      if (!dataStatus) {
        throw Error('Status não cadastrado');
      }
      res.data.forEach(async ({ name, distinguishedName, objectGUID }) => {
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
      });

      const remove = await repo.findNotSyncLocaton(sync);
      if (remove) {
        remove.forEach(async rem => {
          const remStatus = await repoStatus.findByRef('I');
          if (remStatus) {
            // eslint-disable-next-line no-param-reassign
            rem.status = remStatus?.id;
            await repo.update(rem);
          }
        });
      }

      // for (const { name, distinguishedName, objectGUID } of res.data) {
      //   const sector = await repo.findByGuid(objectGUID);

      //   if (sector) {
      //     // UPDATE
      //     sector.name = name;
      //     sector.dn = distinguishedName;
      //     sector.sync = sync;
      //     await repo.update(sector);
      //   } else {
      //     // INSERT
      //     const sectorValid = await repo.findValidSyncLocation(name);
      //     if (!sectorValid) {
      //       const add = new Sector();
      //       add.name = name;
      //       add.obs = obs;
      //       add.type = type;
      //       add.status = dataStatus.id;
      //       add.dn = distinguishedName;
      //       add.guid = objectGUID;
      //       add.sync = sync;
      //       await repo.create(add);
      //     }
      //   }
      // }
      // const remove = await repo.findNotSyncLocaton(sync);
      // if (remove) {
      //   for (const rem of remove) {
      //     const remStatus = await repoStatus.findByRef('I');
      //     if (remStatus) {
      //       rem.status = remStatus?.id;
      //       await repo.update(rem);
      //     }
      //   }
      // }
    } else {
      throw Error('Erro na sincronização de locais.');
    }
  }
}

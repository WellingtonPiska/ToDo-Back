import 'dotenv/config';
import ldap from '../../../config/axios/ldap';
import { v4 as uuid } from 'uuid';
import UserRepository from '../../user/repository/UserRepository';
import SectorRepository from '../../sector/repository/SectorRepository';
import StatusRepository from '../../status/repository/StatusRepository';
import User from '../../user/entities/User';

// interface IResponseSyncSector {
//   name: string;
//   dn: string;
//   guid: string;
// }

// interface ILdapOu {
//   status: number;
//   data: [
//     {
//       name: string;
//       distinguishedName: string;
//       objectGUID: string;
//     }
//   ];
// }

export class ServiceSyncUser {
  async execute(): Promise<void> {
    const repo = new UserRepository();
    const repoSector = new SectorRepository();
    const repoStatus = new StatusRepository();
    const dataStatus = await repoStatus.findByRef('A');
    //   const obs = 'Registro adicionado pela sincronização.';
    //   const type = 'S';
    //   const sync = uuid();
    if (!dataStatus) {
      throw Error('Status não cadastrado');
    }

    const list = await repoSector.findAllByType('S', dataStatus.id);
    for (const { id, dn } of list) {
      const sectorId = id;

      const param = {
        ou: dn,
        subou: true,
      };
      const res = await ldap.post('/ldap/user/list', param);
      if (res.status == 200) {
        for (const usr of res.data) {
          const user = await repo.findBySid(usr.objectSid);
          if (user) {
            user.name = usr.givenName;
            user.lastName = usr.sn;
            // status,
            // login,
            // cpf,
            // sid,

            // sector,
            // costCenter,
            // profile;

            //           sector.name = name;
            //           sector.dn = distinguishedName;
            //           sector.sync = sync;
            //           await repo.update(sector);
          } else {
            const userValid = await repo.findValidSyncUser(usr.sAMAccountName);
            if (!userValid) {
              const add = new User();
              add.name = usr.givenName;
              add.lastName = usr.sn;
              add.display = usr.displayName;
              add.login = usr.sAMAccountName;
              add.sid = usr.objectSid;
              add.mail = usr.mail;

              //             add.sync = sync;
              //             await repo.create(add);
              console.log(add);

              return;
              break;
            }
          }
        }
      }
    }
    //   const remove = await repo.findNotSyncSector(sync);
    //   if (remove) {
    //     for (const rem of remove) {
    //       const remStatus = await repoStatus.findByRef('I');
    //       if (remStatus) {
    //         rem.status = remStatus?.id;
    //         await repo.update(rem);
    //       }
    //     }
    //   }
  }
}

import 'dotenv/config';
import { v4 as uuid } from 'uuid';
import ldap from '../../../config/axios/ldap';
import ProfileRepository from '../../profile/repository/ProfileRepository';
import SectorRepository from '../../sector/repository/SectorRepository';

// import SectorRepository from '../../sector/repository/SectorRepository';
import StatusRepository from '../../status/repository/StatusRepository';
import User from '../../user/entities/User';
import UserRepository from '../../user/repository/UserRepository';

export class ServiceSyncUser {
  async execute(): Promise<void> {
    const repo = new UserRepository();
    const repoSector = new SectorRepository();
    const repoStatus = new StatusRepository();
    const dataStatus = await repoStatus.findByRef('A');
    const sync = uuid();
    if (!dataStatus) {
      throw Error('Status não cadastrado');
    }

    const list = await repoSector.findAllByType('S', dataStatus.id);
    for (const { id, dn } of list) {
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
            user.display = usr.displayName;
            user.login = usr.sAMAccountName;
            user.mail = usr.mail;
            user.sync = sync;
            user.sector = id;
            user.status = dataStatus.id;
            await repo.update(user);
          } else {
            const userValid = await repo.findValidSyncUser(usr.sAMAccountName);
            if (!userValid) {
              const repoProfile = new ProfileRepository();
              const profile = await repoProfile.findByName('Usuarios');
              if (!profile) {
                throw new Error('Profile não encontrado');
              }

              const add = new User();
              add.name = usr.givenName;
              add.lastName = usr.sn;
              add.display = usr.displayName;
              add.login = usr.sAMAccountName;
              add.sid = usr.objectSid;
              add.mail = usr.mail;
              add.sync = sync;
              add.sector = id;
              add.status = dataStatus.id;
              add.profile = profile.id;
              await repo.create(add);
            }
          }
        }
      }
    }

    const remove = await repo.findNotSyncUser(sync);

    console.log(remove);
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

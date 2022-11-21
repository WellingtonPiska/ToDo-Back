import 'dotenv/config';
import { Any } from 'typeorm';
import ldap from '../../../config/axios/ldap';
import { ServiceCreateSector } from '../../sector/services/ServiceCreateSector';
import { ServiceFindStatusByName } from '../../status/services/ServiceFindStatusByName';

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

export class ServiceSyncSector {
  async execute(): Promise<void> {
    const param = {
      ou: process.env.LDAP_DN,
      subou: false,
    };
    const res = await ldap.post('/ldap/ou/list', param);
    if (res.status == 200) {
      const svcCreatorSector = new ServiceCreateSector();

      const svcFindStatus = new ServiceFindStatusByName();
      const status = await svcFindStatus.execute({ name: 'Ativo' });

      res.data.forEach(
        async ({ name, distinguishedName, objectGUID }: ILdapOu) => {
          const result = await svcCreatorSector.execute({
            name,
            obs: '',
            status: status.id,
            type: 'L',
            dn: distinguishedName,
            guid: objectGUID,
          });
        }
      );
    }
    throw Error('Erro na consulta LDAP.');
  }
}

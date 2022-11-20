import 'reflect-metadata';
import ldap from '../../../config/axios/ldap';

import { dataSource } from '../../../shared/database';
import Sector from '../entities/Sector';

export class ServiceSyncSector {
  async execute() {
    const param = {
      ou: "OU=Locais,OU=Administracao-TI,DC=hcampodoro,DC=com,DC=br",
      subou: true
    }

    const res = await ldap.post('/ldap/ou/list', param)

    if (res.status == 200) {
      const data = res.data;
      return data;
    }
    throw Error('Registro não localizado.');

    // const repo = dataSource.getRepository(Sector);
    // const data = await repo.find({
    //   relations: {
    //     costCenterRef: true,
    //     sectorFatherRef: true,
    //     statusRef: true,
    //   }
    // });
    // return data;
  }
}

import 'reflect-metadata';
import 'dotenv/config';
import { dataSource } from '../../../shared/database';
import ldap from '../../../config/axios/ldap';

import { ServiceCreateSector } from '../../sector/services/ServiceCreateSector';
import Status from '../../status/entities/Status';
import Sector from '../../sector/entities/Sector';

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
    const res = await ldap.post('/ldap/ou/list', param);
    if (res.status == 200) {
      const svcCreatorSector = new ServiceCreateSector();
      const repo = dataSource.getRepository(Sector);

      const repoStatus = dataSource.getRepository(Status);
      const dataStatus = await repoStatus.findOneBy({ name: 'Ativo' });

      const obs = 'Registro adicionado pela sincronização.';
      const type = 'L';
      const costCenter = undefined;
      const sectorFather = undefined;

      if (!dataStatus) {
        throw Error('Status não cadastrado');
      }

      res.data.forEach(
        async ({ name, distinguishedName, objectGUID }: ILdapOu) => {
          const sectorValid = await repo
            .createQueryBuilder('sector')
            .where('sector.sec_name_s = :name and sector.sec_type_s = :type', {
              name,
              type,
            })
            .getOne();

          if (!sectorValid) {
            const sector = new Sector();
            sector.name = name;
            sector.obs = obs;
            sector.type = type;
            sector.status = dataStatus.id;
            sector.costCenter = costCenter;
            sector.sectorFather = sectorFather;
            sector.dn = distinguishedName;
            sector.guid = objectGUID;
            const obj = await repo.save(sector);
          }
        }
      );
    } else {
      throw Error('Erro na sincronização de locais.');
    }
  }
}

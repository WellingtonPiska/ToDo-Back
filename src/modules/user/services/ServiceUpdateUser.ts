import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindProfile } from '../../profile/services/ServiceFindProfile';
import { ServiceFindSector } from '../../sector/services/ServiceFindSector';
import { ServiceFindStatus } from '../../status/services/ServiceFindStatus';
import User from '../entities/User';
import { ServiceFindUser } from './ServiceFindUser';

interface IUpdateUser {
  id: string;
  name: string;
  lastName: string;
  login: string;
  password: string;
  cpf?: string;
  mail?: string;
  dn?: string;
  sid: string;
  status: string;
  sector: string;
  costCenter: string;
  profile: string;
  display: string;
}

export class ServiceUpdateUser {
  async execute({ id, name, lastName, login, password, cpf, mail, dn, sid, status, sector, costCenter, profile, display }: IUpdateUser) {
    const repo = dataSource.getRepository(User);

    const serviceFindUser = new ServiceFindUser();
    const data = await serviceFindUser.execute({ id });

    const serviceFindStatus = new ServiceFindStatus();
    const statusRef = await serviceFindStatus.execute({ id: status });

    let costCenterRef = null
    if (costCenter) {
      const serviceFindSector = new ServiceFindSector();
      costCenterRef = await serviceFindSector.execute({ id: costCenter });
    }

    const serviceFindProfile = new ServiceFindProfile();
    const profileRef = await serviceFindProfile.execute({ id: profile });

    const serviceFindSector = new ServiceFindSector();
    const sectorRef = await serviceFindSector.execute({ id: sector });


    const userValid = await repo
      .createQueryBuilder('user')
      .where(
        'user.use_id_s <> :id and (user.use_display_s = :display )',
        {
          id,
          display,

        }
      )
      .getOne();


    if (userValid) {
      throw new Error('Duplicate register');
    }

    data.name = name;
    data.password = password;
    data.cpf = cpf;
    data.mail = mail;
    data.dn = dn;
    data.display = display;
    data.lastName = lastName;
    data.status = statusRef.id;
    data.sector = sectorRef.id;
    data.profile = profileRef.id;
    data.costCenter = costCenterRef?.id;


    const obj = await repo.save(data);
    return obj;
  }
}

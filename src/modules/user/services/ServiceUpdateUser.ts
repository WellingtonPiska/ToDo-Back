import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindProfile } from '../../profile/services/ServiceFindProfile';
import { ServiceFindSector } from '../../sector/services/ServiceFindSector';
import User from '../entities/User';
import { ServiceFindUser } from './ServiceFindUser';

type IUpdateUser = {
  id: string;
  name: string;
  lastName: string;
  login: string;
  password: string;
  cpf?: string;
  mail?: string;
  dn?: string;
  sid: string;
  sector: string;
  costCenter: string;
  profile: string;
  display: string;
};

export class ServiceUpdateUser {
  async execute({
    id,
    name,
    lastName,
    login,
    password,
    cpf,
    mail,
    dn,
    sid,
    sector,
    costCenter,
    profile,
    display,
  }: IUpdateUser) {
    const repo = dataSource.getRepository(User);

    const serviceFindUser = new ServiceFindUser();
    const data = await serviceFindUser.execute({ id });

    let costCenterRef = null;
    if (costCenter) {
      const serviceFindCostCenter = new ServiceFindCostCenter();
      costCenterRef = await serviceFindCostCenter.execute({ id: costCenter });
    }

    const serviceFindProfile = new ServiceFindProfile();
    const profileRef = await serviceFindProfile.execute({ id: profile });

    const serviceFindSector = new ServiceFindSector();
    const sectorRef = await serviceFindSector.execute({ id: sector });

    const userValid = await repo
      .createQueryBuilder('user')
      .where('user.use_id_s <> :id and (user.use_display_s = :display )', {
        id,
        display,
      })
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
    data.sector = sectorRef.id;
    data.profile = profileRef.id;
    data.costCenter = costCenterRef?.id;
    data.login = login;
    data.sid = sid;

    const obj = await repo.save(data);
    return obj;
  }
}

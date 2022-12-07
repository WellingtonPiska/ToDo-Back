import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindProfile } from '../../profile/services/ServiceFindProfile';
import { ServiceFindSector } from '../../sector/services/ServiceFindSector';
import { ServiceFindRefStatus } from '../../status/services/ServiceFindRefStatus';
import User from '../entities/User';

type ICreateUser = {
  name: string;
  lastName: string;
  display: string;
  login: string;
  password?: string;
  cpf?: string;
  mail?: string;
  dn?: string;
  sid?: string;
  sector: string;
  costCenter?: string;
  profile: string;
};
export class ServiceCreateUser {
  async execute({
    name,
    lastName,
    login,
    cpf,
    sid,
    mail,
    password,
    display,
    sector,
    costCenter,
    profile,
  }: ICreateUser): Promise<User> {
    const repo = dataSource.getRepository(User);

    const serviceFindRefStatus = new ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({ ref: 'A' });

    const serviceFindSector = new ServiceFindSector();
    const sectorRef = await serviceFindSector.execute({ id: sector });

    const serviceFindProfile = new ServiceFindProfile();
    const profileRef = await serviceFindProfile.execute({ id: profile });

    let costCenterRef = null;
    if (costCenter) {
      const serviceFindCostCenter = new ServiceFindCostCenter();
      costCenterRef = await serviceFindCostCenter.execute({
        id: costCenter,
      });
    }

    const userValid = await repo
      .createQueryBuilder('user')
      .where('user.use_login_s = :login', {
        login,
      })
      .getOne();

    if (userValid) {
      throw new Error('Duplicate register');
    }

    const user = new User();
    user.status = statusRef.id;
    user.sector = sectorRef.id;
    user.profile = profileRef.id;
    user.costCenter = costCenterRef?.id;
    user.name = name;
    user.lastName = lastName;
    user.display = display;
    user.login = login;
    user.password = password;
    user.cpf = cpf;
    user.sid = sid;
    user.mail = mail;

    const obj = await repo.save(user);
    return obj;
  }
}

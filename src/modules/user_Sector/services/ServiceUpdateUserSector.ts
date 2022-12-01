import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import UserSector from '../entities/UserSector';
import UserSectorRepository from '../repository/UserSectorRepository';
import { ServiceFindUserSector } from './ServiceFindUserSector';

interface IUpdateUserSector {
  id: string;
  user: string;
  costCenter: string;

}

export class ServiceUpdateUserSector {
  async execute({ id, user, costCenter }: IUpdateUserSector): Promise<UserSector> {
    const repo = new UserSectorRepository();

    const serviceFindUserSector = new ServiceFindUserSector();
    const userSector = await serviceFindUserSector.execute({ id });

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const costCenterRef = await serviceFindCostCenter.execute({ id: costCenter });

    const serviceFindUser = new ServiceFindUser();
    const userRef = await serviceFindUser.execute({ id: user });
    userSector.user = userRef.id;
    userSector.costCenter = costCenterRef.id;
    userSector.id = id;

    await repo.update(userSector);
    return userSector;
  }
}

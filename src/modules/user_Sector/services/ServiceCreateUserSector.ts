import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import UserSector from '../entities/UserSector';
import UserSectorRepository from '../repository/UserSectorRepository';

type ICreateUserSector = {
  user: string;
  costCenter: string;
};

export class ServiceCreateUserSector {
  async execute({ user, costCenter }: ICreateUserSector): Promise<UserSector> {
    const repo = new UserSectorRepository();

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const CostCenterRef = await serviceFindCostCenter.execute({
      id: costCenter,
    });

    const serviceFindUser = new ServiceFindUser();
    const userRef = await serviceFindUser.execute({ id: user });

    const ucc = new UserSector();
    ucc.costCenter = CostCenterRef.id;
    ucc.user = userRef.id;
    const obj = await repo.create(ucc);

    return obj;
  }
}

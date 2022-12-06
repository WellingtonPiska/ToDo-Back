import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import UserCostCenter from '../entities/UserCostCenter';
import UserCostCenterRepository from '../repository/UserCostCenterRepository';
import { ServiceFindUserCostCenter } from './ServiceFindUserCostCenter';

type IUpdateUserCostCenter = {
  id: string;
  user: string;
  costCenter: string;
};

export class ServiceUpdateUserCostCenter {
  async execute({
    id,
    user,
    costCenter,
  }: IUpdateUserCostCenter): Promise<UserCostCenter> {
    const repo = new UserCostCenterRepository();

    const serviceFindUserCostCenter = new ServiceFindUserCostCenter();
    const ucc = await serviceFindUserCostCenter.execute({ id });

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const costCenterRef = await serviceFindCostCenter.execute({
      id: costCenter,
    });

    const serviceFindUser = new ServiceFindUser();
    const userRef = await serviceFindUser.execute({ id: user });
    ucc.user = userRef.id;
    ucc.costCenter = costCenterRef.id;
    ucc.id = id;

    await repo.update(ucc);
    return ucc;
  }
}

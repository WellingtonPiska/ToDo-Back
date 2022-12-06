import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import UserCostCenter from '../entities/UserCostCenter';
import UserCostCenterRepository from '../repository/UserCostCenterRepository';

type ICreateUserCostCenter = {
  user: string;
  costCenter: string;
};

export class ServiceCreateUserCostCenter {
  async execute({
    user,
    costCenter,
  }: ICreateUserCostCenter): Promise<UserCostCenter> {
    const repo = new UserCostCenterRepository();

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const CostCenterRef = await serviceFindCostCenter.execute({
      id: costCenter,
    });

    const serviceFindUser = new ServiceFindUser();
    const userRef = await serviceFindUser.execute({ id: user });

    const ucc = new UserCostCenter();
    ucc.costCenter = CostCenterRef.id;
    ucc.user = userRef.id;
    const obj = await repo.create(ucc);

    return obj;
  }
}

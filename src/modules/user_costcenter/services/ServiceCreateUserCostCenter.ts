import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import UserCostCenter from '../entities/UserCostCenter';

interface ICreateUserCostCenter {
  user: string;
  costCenter: string;
}

export class ServiceCreateUserCostCenter {
  async execute({
    costCenter, user
  }: ICreateUserCostCenter): Promise<UserCostCenter> {
    const repo = dataSource.getRepository(UserCostCenter);

    const serviceFindUser = new ServiceFindUser();
    const userRef = await serviceFindUser.execute({ id: user });

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const costCenterRef = await serviceFindCostCenter.execute({ id: costCenter });





    const userCostCenterValid = await repo
      .createQueryBuilder('user')
      .where('user_costcenter.ucc_user_s = :user and user_costcenter.ucc_costcenter_s = :costcenter', {
        user,
        costCenter
      })
      .getOne();

    if (userCostCenterValid) {
      throw new Error('Duplicate register');
    }

    const ucc = new UserCostCenter();

    ucc.costCenter = costCenterRef.id,
      ucc.user = userRef.id


    const obj = await repo.save(ucc);

    return obj;
  }
}

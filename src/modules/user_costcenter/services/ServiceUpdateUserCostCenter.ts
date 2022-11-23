import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import { ServiceFindUser } from '../../user/services/ServiceFindUser';
import UserCostCenter from '../entities/UserCostCenter';

interface IUpdateUserCostCenter {
  id: string;
  costCenter: string;
  user: string;

}

export class ServiceUpdateUserCostCenter {
  async execute({ id, costCenter, user }: IUpdateUserCostCenter) {
    const repo = dataSource.getRepository(UserCostCenter);

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const costCenterRef = await serviceFindCostCenter.execute({ id: costCenter });

    const serviceFindUser = new ServiceFindUser();
    const userRef = await serviceFindUser.execute({ id: user });

    const placeValid = await repo
      .createQueryBuilder('user_costcenter')
      .where(
        'user_costcenter.ucc_id_s <> :id and (user_costcenter.ucc_user_s = :id and user_costcenter.ucc_costcenter_s = :id )',
        {
          id,
          user,
          costCenter
        }
      )
      .getOne();

    if (placeValid) {
      throw new Error('Duplicate register');
    }

    const obj = await repo.save({
      id: id,
      user: userRef.id,
      costcenter: costCenterRef.id
    });
    return obj;
  }
}



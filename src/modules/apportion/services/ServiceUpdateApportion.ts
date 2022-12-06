import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import Apportion from '../entities/Apportion';
import { ServiceFindApportion } from './ServiceFindApportion';

type IUpdateApportion = {
  id: string;
  apportion: string;
  value: number;
  costCenter: string;
};

export class ServiceUpdateApportion {
  async execute({ id, costCenter, value, apportion }: IUpdateApportion) {
    const repo = dataSource.getRepository(Apportion);

    const serviceFindApportion = new ServiceFindApportion();
    const app = await serviceFindApportion.execute({ id });

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const costCenterRef = await serviceFindCostCenter.execute({
      id: costCenter,
    });
    const apportionRef = await serviceFindCostCenter.execute({ id: apportion });

    const apportionValid = await repo
      .createQueryBuilder('apportion')
      .where(
        'apportion.app_id_s <> :id and (apportion.app_apportion_s = :apportion and  apportion.app_costcenter_s = :costCenter)',
        {
          id,
          apportion,
          costCenter,
        }
      )
      .getOne();

    if (apportionValid) {
      throw new Error('Duplicate register');
    }

    app.value = value;
    app.costCenter = costCenterRef.id;
    app.apportion = apportionRef.id;
    const obj = await repo.save(app);

    return obj;
  }
}

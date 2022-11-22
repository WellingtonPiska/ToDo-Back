import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import Apportion from '../entities/Apportion';

interface ICreateApportion {
  value: number;
  costCenter: string;
  apportion: string;

}

export class ServiceCreateApportion {
  async execute({
    costCenter,
    apportion,
    value
  }: ICreateApportion): Promise<Apportion> {
    const repo = dataSource.getRepository(Apportion);

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const costCenterRef = await serviceFindCostCenter.execute({ id: costCenter });
    const apportionRef = await serviceFindCostCenter.execute({ id: apportion });

    const apportionValid = await repo
      .createQueryBuilder('apportion')
      .where('apportion.app_apportion_s = :apportion and  apportion.app_costcenter_s = :costCenter', {
        apportion,
        costCenter
      })
      .getOne();

    if (apportionValid) {
      throw new Error('Duplicate register');
    }

    const app = new Apportion();
    app.value = value;
    app.costCenter = costCenterRef.id
    app.apportion = apportionRef.id
    const obj = await repo.save(app);

    return obj;
  }
}

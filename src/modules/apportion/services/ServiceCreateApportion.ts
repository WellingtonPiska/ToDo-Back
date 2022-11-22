import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import Apportion from '../entities/Apportion';
import { ServiceFindApportion } from './ServiceFindApportion';

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
  }: ICreateApportion) {
    const repo = dataSource.getRepository(Apportion);

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const costcenterRef = await serviceFindCostCenter.execute({ id: costCenter });

    const serviceFindApportion = new ServiceFindApportion();
    const apportionRef = await serviceFindApportion.execute({ id: apportion });




    const apportionValid = await repo
      .createQueryBuilder('apportion')
      .where('apportion.app_value_n = :value', {
        value,

      })
      .getOne();

    if (apportionValid) {
      throw new Error('Duplicate register');
    }

    const app = new Apportion();
    app.value = value;
    app.costCenter = costcenterRef.id
    app.apportion = apportionRef.id





    const obj = await repo.save(apportion);

    return obj;
  }
}

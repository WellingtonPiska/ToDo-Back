import { ServiceFindCostCenter } from '../../costCenter/services/ServiceFindCostCenter';
import Apportion from '../entities/Apportion';
import ApportionRepository from '../repository/ApportionRepository';
import { ServiceFindApportion } from './ServiceFindApportion';

type ICreateApportion = {
  value: number;
  costCenter: string;
  apportion: string;
};

export class ServiceCreateApportion {
  async execute({
    value,
    costCenter,
    apportion,
  }: ICreateApportion): Promise<Apportion> {
    const repo = new ApportionRepository();

    const serviceFindApportion = new ServiceFindApportion();
    const apportionRef = await serviceFindApportion.execute({ id: apportion });

    const serviceFindCostCenter = new ServiceFindCostCenter();
    const costCenterRef = await serviceFindCostCenter.execute({
      id: costCenter,
    });

    const app = new Apportion();
    app.value = value;
    app.apportion = apportionRef.id;
    app.costCenter = costCenterRef.id;
    const obj = await repo.create(app);

    return obj;
  }
}

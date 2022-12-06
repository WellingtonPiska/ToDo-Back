import ApportionRepository from '../repository/ApportionRepository';
import { ServiceFindApportion } from './ServiceFindApportion';

type IDeleteApportion = {
  id: string;
};

export class ServiceDeleteApportion {
  async execute({ id }: IDeleteApportion): Promise<boolean> {
    const repo = new ApportionRepository();
    const serviceFindApportion = new ServiceFindApportion();
    const apportion = await serviceFindApportion.execute({ id });
    await repo.remove(apportion);
    return true;
  }
}

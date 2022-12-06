import ModelRepository from '../repository/ModelRepository';
import { ServiceFindModel } from './ServiceFindModel';

type IDeleteModel = {
  id: string;
};

export class ServiceDeleteModel {
  async execute({ id }: IDeleteModel): Promise<boolean> {
    const repo = new ModelRepository();
    const serviceFindCosCenter = new ServiceFindModel();
    const model = await serviceFindCosCenter.execute({ id });
    await repo.remove(model);
    return true;
  }
}

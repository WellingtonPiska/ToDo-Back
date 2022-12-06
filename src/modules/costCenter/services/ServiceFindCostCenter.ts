import CostCenterRepository from '../repository/CostCenterRepository';

type IFindCostCenter = {
  id: string;
};

export class ServiceFindCostCenter {
  async execute({ id }: IFindCostCenter) {
    const repo = new CostCenterRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new Error('CostCenter não encontrado');
    }
    return data;
  }
}

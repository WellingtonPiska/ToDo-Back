import CostCenterRepository from "../repository/CostCenterRepository";

interface IDeleteCostCenter {
  id: string;
}

export class ServiceDeleteCostCenter {
  async execute({ id }: IDeleteCostCenter) {
    const repo = new CostCenterRepository();

    const costCenter = await repo.findById(id);

    if (!costCenter) {
      throw new Error('CostCenter não existe');
    }

    await repo.remove(costCenter);

    return 'Deleted';
  }
}

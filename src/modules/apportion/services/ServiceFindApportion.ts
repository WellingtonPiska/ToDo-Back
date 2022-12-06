import Apportion from '../entities/Apportion';
import ApportionRepository from '../repository/ApportionRepository';

type IFindApportion = {
  id: string;
};

export class ServiceFindApportion {
  async execute({ id }: IFindApportion): Promise<Apportion> {
    const repo = new ApportionRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new Error('Apportion not found');
    }

    return data;
  }
}

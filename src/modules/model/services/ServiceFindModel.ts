import ModelRepository from '../repository/ModelRepository';

type IFindModel = {
  id: string;
};

export class ServiceFindModel {
  async execute({ id }: IFindModel) {
    const repo = new ModelRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new Error('Model não encontrado');
    }
    return data;
  }
}

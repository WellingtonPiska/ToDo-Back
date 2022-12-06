import GroupRepository from '../repository/GroupRepository';

type IFindGroup = {
  id: string;
};

export class ServiceFindGroup {
  async execute({ id }: IFindGroup) {
    const repo = new GroupRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new Error('Group não encontrado');
    }
    return data;
  }
}

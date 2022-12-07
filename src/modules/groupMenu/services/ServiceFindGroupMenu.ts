import GroupMenuRepository from '../repository/GroupMenuRepository';

type IFindGroupMenu = {
  id: string;
};

export class ServiceFindGroupMenu {
  async execute({ id }: IFindGroupMenu) {
    const repo = new GroupMenuRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new Error('GroupMenu não encontrado');
    }
    return data;
  }
}

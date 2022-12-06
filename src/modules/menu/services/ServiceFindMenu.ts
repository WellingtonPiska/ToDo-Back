import Menu from '../entities/Menu';
import MenuRepository from '../repository/MenuRepository';

type IFindMenu = {
  id: string;
};

export class ServiceFindMenu {
  async execute({ id }: IFindMenu): Promise<Menu> {
    const repo = new MenuRepository();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('Registro não encontrado.');
    }
    return data;
  }
}

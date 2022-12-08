import 'reflect-metadata';
import { dataSource } from '../../../shared/database';
import ProfileMenu from '../entities/ProfileMenu';
import { ServiceFindProfileMenu } from './ServiceFindProfileMenu';

type IDeleteProfileMenu = {
  id: string;
};

export class ServiceDeleteProfileMenu {
  async execute({ id }: IDeleteProfileMenu): Promise<boolean> {
    const repo = dataSource.getRepository(ProfileMenu);
    const serviceFindProfileMenu = new ServiceFindProfileMenu();
    const pme = await serviceFindProfileMenu.execute({ id });
    await repo.delete({ id: pme.id });
    return true;
  }
}

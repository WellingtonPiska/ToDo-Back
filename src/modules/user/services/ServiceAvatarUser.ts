import { dataSource } from '../../../shared/database/index';
import 'reflect-metadata';
import { deleteFile } from '../../../shared/utils/file';
import User from '../entities/User';
import { ServiceFindUser } from './ServiceFindUser';

type IPutAvatar = {
  id: string;
  avatar: string;
};

export class ServicePutAvatar {
  async execute({ id, avatar }: IPutAvatar) {
    const repo = dataSource.getRepository(User);

    const serviceFindUser = new ServiceFindUser();
    const ava = await serviceFindUser.execute({ id });
    console.log(ava.avatar);
    if (ava.avatar) {
      await deleteFile(`./public/avatar/${ava.avatar}`);
    }

    ava.avatar = avatar;

    const obj = await repo.save(ava);
    return obj;
  }
}

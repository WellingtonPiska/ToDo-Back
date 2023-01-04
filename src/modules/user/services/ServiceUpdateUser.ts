import User from '../entities/User';
import UserRepository from '../repository/UserRepository';
import { ServiceFindUser } from './ServiceFindUser';

type IUpdateUser = {
  id: string;
  login: string;
  password: string;
  name: string;
  lastName: string;
  mail: string;
  phone: string;
  avatar: string;
};

export class ServiceUpdateUser {
  async execute({
    id,
    login,
    password,
    name,
    lastName,
    mail,
    phone,
    avatar,
  }: IUpdateUser): Promise<User> {
    const repo = new UserRepository();

    const serviceFindUser = new ServiceFindUser();
    const user = await serviceFindUser.execute({ id });

    const userValid = await repo.findValidUpdate(id, login, mail);

    if (userValid) {
      throw new Error('Usuário duplicado');
    }

    user.login = login;
    user.password = password;
    user.lastname = lastName;
    user.mail = mail;
    user.phone = phone;
    user.avatar = avatar;
    user.name = name;
    await repo.update(user);
    return user;
  }
}

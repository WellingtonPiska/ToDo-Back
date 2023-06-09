import AppError from '../../../shared/errors/AppError';
import User from '../entities/User';
import UserRepository from '../repository/UserRepository';

type IUpdateUser = {
  id: string;
  login: string;
  name: string;
  lastName: string;
  mail: string;
  phone: string;
  avatar: string;
  color?: string;
};

export class ServiceUpdateUser {
  async execute({
    id,
    login,
    name,
    lastName,
    mail,
    phone,
    avatar,
    color,
  }: IUpdateUser): Promise<User> {
    const repo = new UserRepository();

    // const serviceFindUser = new ServiceFindUser();
    // const user = await serviceFindUser.execute({ id });

    const user = await repo.findById(id);
    if (!user) {
      throw new AppError('Usuario nao encontrado');
    }

    const validName = await repo.findByNameAndId(name, id);
    if (validName) {
      throw new AppError('Nome do usuário já cadastrado!.');
    }

    user.login = login;
    user.lastName = lastName;
    user.mail = mail;
    user.phone = phone;
    user.avatar = avatar;
    user.name = name;
    user.color = color;
    await repo.save(user);
    return user;
  }
}

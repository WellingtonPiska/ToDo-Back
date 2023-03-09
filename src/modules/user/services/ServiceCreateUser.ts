import { hash } from 'bcrypt';

import AppError from '../../../shared/errors/AppError';
import User from '../entities/User';
import UserRepository from '../repository/UserRepository';

type ICreateUser = {
  login: string;
  password: string;
  name: string;
  lastName: string;
  mail: string;
  phone?: string;
  avatar?: string;
  color?: string;
};

export class ServiceCreateUser {
  async execute({
    login,
    password,
    name,
    lastName,
    mail,
    phone,
    avatar,
    color,
  }: ICreateUser): Promise<User> {
    const passwordHash = await hash(password, 8);
    const repo = new UserRepository();

    const mailExists = repo.findByMail(mail);
    if (!mailExists) {
      throw new AppError('Este email ja existe');
    }

    const userValid = await repo.findByLogin(login);

    if (userValid) {
      throw new AppError('Esse usuário já existe');
    }

    const user = new User();
    user.login = login;
    user.password = passwordHash;
    user.name = name;
    user.lastName = lastName;
    user.mail = mail;
    user.phone = phone;
    user.avatar = avatar;
    user.color = color;
    const obj = await repo.save(user);

    return obj;
  }
}

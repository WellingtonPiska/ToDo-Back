import { hash } from 'bcrypt';

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

    const mailAlreadyExists = await repo.findByMail(mail);
    if (mailAlreadyExists) {
      throw new Error('Este email já existe!');
    }

    const userValid = await repo.findByLogin(login);

    if (userValid) {
      throw new Error('Esse usuário já existe');
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
    const obj = await repo.create(user);

    return obj;
  }
}

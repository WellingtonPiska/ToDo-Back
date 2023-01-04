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
  }: ICreateUser): Promise<User> {
    const repo = new UserRepository();

    const userValid = await repo.findByLogin(login);

    if (userValid) {
      throw new Error('Esse usuário já existe');
    }

    const user = new User();
    user.login = login;
    user.password = password;
    user.name = name;
    user.lastname = lastName;
    user.mail = mail;
    user.phone = phone;
    user.avatar = avatar;
    const obj = await repo.create(user);

    return obj;
  }
}

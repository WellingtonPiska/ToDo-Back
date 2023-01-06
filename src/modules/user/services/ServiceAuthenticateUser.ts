import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import UserRepository from '../repository/UserRepository';

type IRequest = {
  login: string;
  password: string;
};

type IResponse = {
  user: {
    name: string;
    login: string;
  };
  token: string;
};

class AuthenticateUser {
  async execute({ login, password }: IRequest): Promise<IResponse> {
    // Usuário existe

    const repo = new UserRepository();
    const user = await repo.findByLogin(login);

    if (!user) {
      throw new Error('Login ou senha incorretas!');
    }

    // Senha está correta
    const passwordMatch = await compare(password, user.password);
    console.log(password, user.password);

    if (!passwordMatch) {
      throw new Error('Login ou senha incorretas!');
    }

    const token = sign({}, '3e7b339e7f1fdfc2f4a147ec1d871d5d', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
    // Gerar jsonwebtoken
  }
}

export { AuthenticateUser };

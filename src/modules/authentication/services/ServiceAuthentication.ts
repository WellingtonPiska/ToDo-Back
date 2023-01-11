import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import auth from '../../../config/auth';
import UserRepository from '../../user/repository/UserRepository';
// import UserTokens from '../entities/UserTokens';
// import UserTokensRepository from '../repository/UserTokensRepository';

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
    // const userTokensRepository = new UserTokensRepository();
    const user = await repo.findByLogin(login);

    if (!user) {
      throw new Error('Login ou senha incorretas!');
    }

    // Senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Login ou senha incorretas!');
    }

    const token = sign({}, auth.secretToken, {
      subject: user.id,
      expiresIn: auth.expireInToken,
    });

    // const refreshToken = sign(
    //   { login, mail: user.mail },
    //   auth.secretRefreshToken,
    //   {
    //     subject: user.id,
    //     expiresIn: auth.expireInRefreshToken,
    //   }
    // );

    // await userTokensRepository.create({
    //   expiresDate,
    //   refreshToken,
    //   user: user.id,
    // });

    return {
      user,
      token,
    };
    // Gerar jsonwebtoken
  }
}

export { AuthenticateUser };

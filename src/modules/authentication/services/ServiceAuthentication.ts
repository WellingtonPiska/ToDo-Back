import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import auth from '../../../config/auth';
import { DayjsDateProvider } from '../../../shared/utils/DayjsDateProvider';
import UserRepository from '../../user/repository/UserRepository';
import UserTokensRepository from '../repository/UserTokensRepository';
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
  refreshToken: string;
};

class ServiceAuthentication {
  async execute({ login, password }: IRequest): Promise<IResponse> {
    // Usuário existe

    const userRepository = new UserRepository();
    const userTokensRepository = new UserTokensRepository();
    const dayjsDateProvider = new DayjsDateProvider();

    const user = await userRepository.findByLogin(login);

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

    const refreshToken = sign(
      { login, mail: user.mail },
      auth.secretRefreshToken,
      {
        subject: user.id,
        expiresIn: auth.expireInRefreshToken,
      }
    );

    const expiresDate = dayjsDateProvider.addDays(auth.expireRefreshTokenDays);

    await userTokensRepository.create({
      expiresDate,
      user: user.id,
      refreshToken,
    });

    return {
      user,
      token,
      refreshToken,
    };
  }
}

export { ServiceAuthentication };

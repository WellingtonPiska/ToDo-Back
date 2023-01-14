import { sign, verify } from 'jsonwebtoken';

import auth from '../../../config/auth';
import { DayjsDateProvider } from '../../../shared/utils/DayjsDateProvider';
import UserTokensRepository from '../repository/UserTokensRepository';

type IRequest = {
  refreshToken: string;
};

type IResponse = {
  user: string;
  token: string;
  refreshToken: string;
};

type IPayLoad = {
  sub: string;
  mail: string;
  login: string;
};

class ServiceAuthenticationRefreshToken {
  async execute({ refreshToken }: IRequest): Promise<IResponse> {
    const userTokensRepository = new UserTokensRepository();
    const dayjsDateProvider = new DayjsDateProvider();
    const { login, mail, sub } = verify(
      refreshToken,
      auth.secretRefreshToken
    ) as IPayLoad;

    const userId = sub;

    const userToken = await userTokensRepository.findByUserId(
      userId,
      refreshToken
    );

    if (!userToken) {
      throw new Error('Refresh token not found!');
    }
    if (userToken.id) {
      await userTokensRepository.deleteById(userToken.id);
    }

    const token = sign({}, auth.secretToken, {
      subject: userId,
      expiresIn: auth.expireInToken,
    });

    const newRefreshToken = sign({ login, mail }, auth.secretRefreshToken, {
      subject: userId,
      expiresIn: auth.expireInRefreshToken,
    });

    const expiresDate = dayjsDateProvider.addDays(auth.expireRefreshTokenDays);

    await userTokensRepository.create({
      expiresDate,
      user: userId,
      refreshToken: newRefreshToken,
    });

    return {
      user: userId,
      token,
      refreshToken: newRefreshToken,
    };
  }
}

export { ServiceAuthenticationRefreshToken };

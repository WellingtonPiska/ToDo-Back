import { Request, NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';

import UserRepository from '../../modules/user/repository/UserRepository';

type IPayLoad = {
  sub: string;
};

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('O Token está faltando!');
  }

  const [, token] = authHeader.split(' ');
  try {
    const { sub: id } = verify(
      token,
      '3e7b339e7f1fdfc2f4a147ec1d871d5d'
    ) as IPayLoad;

    const userRepository = new UserRepository();
    const user = await userRepository.findById(id);

    if (!user) {
      throw new Error('O Usuário não existe!');
    }

    next();
  } catch (e) {
    // console.log(e);
    throw new Error('Token inválido!');
  }
}

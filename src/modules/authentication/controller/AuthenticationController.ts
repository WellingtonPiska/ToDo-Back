import { Request, Response } from 'express';

import { ServiceAuthentication } from '../services/ServiceAuthentication';
import { ServiceAuthenticationRefreshToken } from '../services/ServiceAuthenticationRefreshToken';

export default class AuthenticationController {
  public async login(request: Request, response: Response): Promise<Response> {
    const { password, login } = request.body;

    const serviceAuthentication = new ServiceAuthentication();

    const token = await serviceAuthentication.execute({
      login,
      password,
    });
    return response.json(token);
  }

  public async refreshToken(
    request: Request,
    response: Response
  ): Promise<Response> {
    const refreshToken =
      request.body.refreshToken ||
      request.headers['x-access-token'] ||
      request.query.refreshToken;

    const serviceAuthenticationRefreshToken =
      new ServiceAuthenticationRefreshToken();

    const dataToken = await serviceAuthenticationRefreshToken.execute({
      refreshToken,
    });
    return response.json(dataToken);
  }
}

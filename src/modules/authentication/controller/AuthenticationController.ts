import { Request, Response } from 'express';

import { ServiceLogin } from '../services/ServiceLoginAuth';

export default class AuthenticationController {
  public async login(request: Request, response: Response): Promise<Response> {
    const { login, password } = request.body;
    const svcLogin = new ServiceLogin();

    const user = await svcLogin.execute(login, password);

    return response.json(user);
  }
}

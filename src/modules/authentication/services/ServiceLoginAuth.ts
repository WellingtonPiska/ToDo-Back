import { sign } from 'jsonwebtoken';

import ldap from '../../../config/axios/ldap';
import UserRepository from '../../user/repository/UserRepository';

export class ServiceLogin {
  async execute(login: string, password: string): Promise<any> {
    const repoUser = new UserRepository();

    const user = await repoUser.findByLogin(login);

    if (!user) {
      throw new Error('Login e/ou senha invalidos!');
    }

    const param = {
      username: login,
      password,
    };

    try {
      const res = await ldap.post('/ldap/user/auth', param);
      if (res.status == 200) {
        const token = sign({}, 'vfjvnfjnvjfnvjfnvjfnv', {
          subject: user.id,
          expiresIn: '1d',
        });

        const data = {
          user: {
            id: user.id,
            name: user.display,
            photo: '',
          },
          token,
          menu: {},
        };

        return data;
      }
    } catch (err) {
      throw new Error('Login e/ou senha invalidos!');
    }
  }
}

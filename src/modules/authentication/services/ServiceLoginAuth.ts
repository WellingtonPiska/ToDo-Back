import ldap from '../../../config/axios/ldap';
import UserRepository from '../../user/repository/UserRepository';
import { sign } from 'jsonwebtoken';

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
        return { token: token };
      }
    } catch (err) {
      throw new Error('Login e/ou senha invalidos!');
    }
  }
}

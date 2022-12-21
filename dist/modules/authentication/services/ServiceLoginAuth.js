"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceLogin = void 0;
var _ldap = _interopRequireDefault(require("../../../config/axios/ldap"));
var _UserRepository = _interopRequireDefault(require("../../user/repository/UserRepository"));
var _jsonwebtoken = require("jsonwebtoken");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceLogin {
  async execute(login, password) {
    const repoUser = new _UserRepository.default();
    const user = await repoUser.findByLogin(login);
    if (!user) {
      throw new Error('Login e/ou senha invalidos!');
    }
    const param = {
      username: login,
      password
    };
    try {
      const res = await _ldap.default.post('/ldap/user/auth', param);
      if (res.status == 200) {
        const token = (0, _jsonwebtoken.sign)({}, 'vfjvnfjnvjfnvjfnvjfnv', {
          subject: user.id,
          expiresIn: '1d'
        });
        const data = {
          user: {
            id: user.id,
            name: user.display,
            photo: ''
          },
          token: token,
          menu: {}
        };
        return data;
      }
    } catch (err) {
      throw new Error('Login e/ou senha invalidos!');
    }
  }
}
exports.ServiceLogin = ServiceLogin;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceLoginAuth = require("../services/ServiceLoginAuth");
class AuthenticationController {
  async login(request, response) {
    const {
      login,
      password
    } = request.body;
    const svcLogin = new _ServiceLoginAuth.ServiceLogin();
    const user = await svcLogin.execute(login, password);
    return response.json(user);
  }
}
exports.default = AuthenticationController;
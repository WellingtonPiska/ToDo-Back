"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ldap = _axios.default.create({
  baseURL: 'http://ldap.gruporisotolandia.com.br',
  timeout: 5000,
  headers: {
    token: 'ebc61675b2f5a553d340dacad99f35c6c3d188c7'
  }
});
var _default = ldap;
exports.default = _default;
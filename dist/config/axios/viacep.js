"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const viacep = _axios.default.create({
  baseURL: 'https://viacep.com.br/ws',
  timeout: 3000
});
var _default = viacep;
exports.default = _default;
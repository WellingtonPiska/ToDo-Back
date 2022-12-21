"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ibge = _axios.default.create({
  baseURL: 'http://servicodados.ibge.gov.br/api/v1/localidades',
  timeout: 3000
});
var _default = ibge;
exports.default = _default;
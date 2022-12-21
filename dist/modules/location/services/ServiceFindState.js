"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindState = void 0;
require("reflect-metadata");
var _ibge = _interopRequireDefault(require("../../../config/axios/ibge"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindState {
  async execute({
    uf
  }) {
    const res = await _ibge.default.get(`/estados/${uf}`);
    if (res.status === 200) {
      return {
        uf: res.data.sigla,
        name: res.data.nome
      };
    }
    throw Error('Registro não localizado.');
  }
}
exports.ServiceFindState = ServiceFindState;
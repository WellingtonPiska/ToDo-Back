"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindZipCode = void 0;
require("reflect-metadata");
var _viacep = _interopRequireDefault(require("../../../config/axios/viacep"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindZipCode {
  async execute({
    cep
  }) {
    const res = await _viacep.default.get(`/${cep}/json`);
    if (res.status === 200) {
      return {
        zipcode: res.data.cep,
        street: res.data.logradouro,
        district: res.data.bairro,
        city: res.data.localidade,
        state: res.data.uf
      };
    }
    throw Error('Registro não localizado.');
  }
}
exports.ServiceFindZipCode = ServiceFindZipCode;
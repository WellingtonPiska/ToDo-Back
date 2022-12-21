"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListState = void 0;
require("reflect-metadata");
var _ibge = _interopRequireDefault(require("../../../config/axios/ibge"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListState {
  async execute() {
    const res = await _ibge.default.get('/estados');
    if (res.status === 200) {
      const data = res.data.map(({
        sigla,
        nome
      }) => {
        return {
          uf: sigla,
          name: nome
        };
      });
      return data;
    }
    throw Error('Registro não localizado.');
  }
}
exports.ServiceListState = ServiceListState;
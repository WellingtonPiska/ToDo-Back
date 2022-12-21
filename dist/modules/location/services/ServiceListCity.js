"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListCity = void 0;
require("reflect-metadata");
var _ibge = _interopRequireDefault(require("../../../config/axios/ibge"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListCity {
  async execute({
    uf
  }) {
    const res = await _ibge.default.get(`/estados/${uf}/municipios`);
    if (res.status === 200) {
      const data = res.data.map(({
        nome,
        microrregiao
      }) => {
        return {
          name: nome,
          uf: microrregiao.mesorregiao.UF.sigla
        };
      });
      return data;
    }
    throw Error('Registro não localizado.');
  }
}
exports.ServiceListCity = ServiceListCity;
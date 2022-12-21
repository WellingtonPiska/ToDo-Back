"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceListCity = require("../services/ServiceListCity");
class CityController {
  async list(request, response) {
    const serviceListCity = new _ServiceListCity.ServiceListCity();
    const {
      uf
    } = request.params;
    const data = await serviceListCity.execute({
      uf
    });
    return response.json(data);
  }
}
exports.default = CityController;
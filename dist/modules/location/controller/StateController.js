"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceFindState = require("../services/ServiceFindState");
var _ServiceListState = require("../services/ServiceListState");
class StateController {
  async list(request, response) {
    const serviceListState = new _ServiceListState.ServiceListState();
    const data = await serviceListState.execute();
    return response.json(data);
  }
  async find(request, response) {
    const {
      uf
    } = request.params;
    const serviceFindState = new _ServiceFindState.ServiceFindState();
    const data = await serviceFindState.execute({
      uf
    });
    return response.json(data);
  }
}
exports.default = StateController;
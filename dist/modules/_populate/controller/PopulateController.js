"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServicePopulate = require("../services/ServicePopulate");
class PopulateController {
  async populate(request, response) {
    const svc = new _ServicePopulate.ServicePopulate();
    const data = svc.execute();
    return response.json(data);
  }
}
exports.default = PopulateController;
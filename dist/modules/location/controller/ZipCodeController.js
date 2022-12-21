"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceFindZipCode = require("../services/ServiceFindZipCode");
class ZipCodeController {
  async find(request, response) {
    const serviceFindZipCode = new _ServiceFindZipCode.ServiceFindZipCode();
    const {
      cep
    } = request.params;
    const data = await serviceFindZipCode.execute({
      cep
    });
    return response.json(data);
  }
}
exports.default = ZipCodeController;
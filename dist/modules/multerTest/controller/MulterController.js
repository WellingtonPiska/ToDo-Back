"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class MulterController {
  async import(request, response) {
    console.log('teste');
    return response.json('ok');
  }
}
exports.default = MulterController;
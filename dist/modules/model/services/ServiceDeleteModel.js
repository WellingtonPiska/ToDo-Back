"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteModel = void 0;
var _ModelRepository = _interopRequireDefault(require("../repository/ModelRepository"));
var _ServiceFindModel = require("./ServiceFindModel");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteModel {
  async execute({
    id
  }) {
    const repo = new _ModelRepository.default();
    const serviceFindCosCenter = new _ServiceFindModel.ServiceFindModel();
    const model = await serviceFindCosCenter.execute({
      id
    });
    await repo.remove(model);
    return true;
  }
}
exports.ServiceDeleteModel = ServiceDeleteModel;
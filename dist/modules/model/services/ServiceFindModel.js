"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindModel = void 0;
var _ModelRepository = _interopRequireDefault(require("../repository/ModelRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindModel {
  async execute({
    id
  }) {
    const repo = new _ModelRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('Model não encontrado');
    }
    return data;
  }
}
exports.ServiceFindModel = ServiceFindModel;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindCostCenter = void 0;
var _CostCenterRepository = _interopRequireDefault(require("../repository/CostCenterRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindCostCenter {
  async execute({
    id
  }) {
    const repo = new _CostCenterRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('CostCenter não encontrado');
    }
    return data;
  }
}
exports.ServiceFindCostCenter = ServiceFindCostCenter;
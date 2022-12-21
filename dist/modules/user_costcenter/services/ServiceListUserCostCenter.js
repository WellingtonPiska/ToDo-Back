"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListUserCostCenter = void 0;
require("reflect-metadata");
var _UserCostCenterRepository = _interopRequireDefault(require("../repository/UserCostCenterRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListUserCostCenter {
  async execute({
    page,
    limit
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _UserCostCenterRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take
    });
    return list;
  }
}
exports.ServiceListUserCostCenter = ServiceListUserCostCenter;
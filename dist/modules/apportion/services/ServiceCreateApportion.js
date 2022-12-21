"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateApportion = void 0;
var _ServiceFindCostCenter = require("../../costCenter/services/ServiceFindCostCenter");
var _Apportion = _interopRequireDefault(require("../entities/Apportion"));
var _ApportionRepository = _interopRequireDefault(require("../repository/ApportionRepository"));
var _ServiceFindApportion = require("./ServiceFindApportion");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateApportion {
  async execute({
    value,
    costCenter,
    apportion
  }) {
    const repo = new _ApportionRepository.default();
    const serviceFindApportion = new _ServiceFindApportion.ServiceFindApportion();
    const apportionRef = await serviceFindApportion.execute({
      id: apportion
    });
    const serviceFindCostCenter = new _ServiceFindCostCenter.ServiceFindCostCenter();
    const costCenterRef = await serviceFindCostCenter.execute({
      id: costCenter
    });
    const app = new _Apportion.default();
    app.value = value;
    app.apportion = apportionRef.id;
    app.costCenter = costCenterRef.id;
    const obj = await repo.create(app);
    return obj;
  }
}
exports.ServiceCreateApportion = ServiceCreateApportion;
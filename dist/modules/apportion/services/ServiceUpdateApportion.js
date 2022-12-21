"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateApportion = void 0;
require("reflect-metadata");
var _database = require("../../../shared/database");
var _ServiceFindCostCenter = require("../../costCenter/services/ServiceFindCostCenter");
var _Apportion = _interopRequireDefault(require("../entities/Apportion"));
var _ServiceFindApportion = require("./ServiceFindApportion");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateApportion {
  async execute({
    id,
    costCenter,
    value,
    apportion
  }) {
    const repo = _database.dataSource.getRepository(_Apportion.default);
    const serviceFindApportion = new _ServiceFindApportion.ServiceFindApportion();
    const app = await serviceFindApportion.execute({
      id
    });
    const serviceFindCostCenter = new _ServiceFindCostCenter.ServiceFindCostCenter();
    const costCenterRef = await serviceFindCostCenter.execute({
      id: costCenter
    });
    const apportionRef = await serviceFindApportion.execute({
      id: apportion
    });
    const apportionValid = await repo.createQueryBuilder('apportion').where('apportion.app_id_s <> :id and (apportion.app_apportion_s = :apportion and  apportion.app_costcenter_s = :costCenter)', {
      id,
      apportion,
      costCenter
    }).getOne();
    if (apportionValid) {
      throw new Error('Duplicate register');
    }
    app.value = value;
    app.costCenter = costCenterRef.id;
    app.apportion = apportionRef.id;
    const obj = await repo.save(app);
    return obj;
  }
}
exports.ServiceUpdateApportion = ServiceUpdateApportion;
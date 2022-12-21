"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateModel = void 0;
var _ServiceFindCompany = require("../../company/services/ServiceFindCompany");
var _ServiceFindDeviceType = require("../../deviceType/services/ServiceFindDeviceType");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _Model = _interopRequireDefault(require("../entities/Model"));
var _ModelRepository = _interopRequireDefault(require("../repository/ModelRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateModel {
  async execute({
    name,
    description,
    company,
    deviceType
  }) {
    const repo = new _ModelRepository.default();
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({
      ref: 'A'
    });
    const serviceFindDeviceType = new _ServiceFindDeviceType.ServiceFindDeviceType();
    const deviceTypeRef = await serviceFindDeviceType.execute({
      id: deviceType
    });
    const serviceFindCompany = new _ServiceFindCompany.ServiceFindCompany();
    const companyRef = await serviceFindCompany.execute({
      id: company
    });
    const modelValid = await repo.findByName(name);
    if (modelValid) {
      throw new Error('Model já existe');
    }
    const mod = new _Model.default();
    mod.name = name;
    mod.description = description;
    mod.status = statusRef.id;
    mod.company = companyRef.id;
    mod.deviceType = deviceTypeRef.id;
    const obj = await repo.create(mod);
    return obj;
  }
}
exports.ServiceCreateModel = ServiceCreateModel;
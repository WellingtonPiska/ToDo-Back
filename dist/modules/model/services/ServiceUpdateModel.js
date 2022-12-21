"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateModel = void 0;
var _ServiceFindCompany = require("../../company/services/ServiceFindCompany");
var _ServiceFindDeviceType = require("../../deviceType/services/ServiceFindDeviceType");
var _ModelRepository = _interopRequireDefault(require("../repository/ModelRepository"));
var _ServiceFindModel = require("./ServiceFindModel");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateModel {
  async execute({
    id,
    name,
    company,
    deviceType,
    description
  }) {
    const repo = new _ModelRepository.default();
    const serviceFindModel = new _ServiceFindModel.ServiceFindModel();
    const model = await serviceFindModel.execute({
      id
    });
    const serviceFindCompany = new _ServiceFindCompany.ServiceFindCompany();
    const companyRef = await serviceFindCompany.execute({
      id: company
    });
    const serviceFindDeviceType = new _ServiceFindDeviceType.ServiceFindDeviceType();
    const deviceTypeRef = await serviceFindDeviceType.execute({
      id: deviceType
    });
    const modelValid = await repo.findValidUpdate(id, name);
    if (modelValid) {
      throw new Error('Model duplicado');
    }
    model.company = companyRef.id;
    model.name = name;
    model.description = description;
    model.deviceType = deviceTypeRef.id;
    await repo.update(model);
    return model;
  }
}
exports.ServiceUpdateModel = ServiceUpdateModel;
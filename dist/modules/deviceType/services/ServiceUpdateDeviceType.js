"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateDeviceType = void 0;
var _DeviceTypeRepository = _interopRequireDefault(require("../repository/DeviceTypeRepository"));
var _ServiceFindDeviceType = require("./ServiceFindDeviceType");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateDeviceType {
  async execute({
    id,
    name,
    obs
  }) {
    const repo = new _DeviceTypeRepository.default();
    const serviceFindDeviceType = new _ServiceFindDeviceType.ServiceFindDeviceType();
    const deviceType = await serviceFindDeviceType.execute({
      id
    });
    const contactTypeValid = await repo.findValidUpdate(id, name);
    if (contactTypeValid) {
      throw new Error('contactType duplicado');
    }
    deviceType.name = name;
    deviceType.obs = obs;
    await repo.update(deviceType);
    return deviceType;
  }
}
exports.ServiceUpdateDeviceType = ServiceUpdateDeviceType;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteDeviceType = void 0;
var _DeviceTypeRepository = _interopRequireDefault(require("../repository/DeviceTypeRepository"));
var _ServiceFindDeviceType = require("./ServiceFindDeviceType");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteDeviceType {
  async execute({
    id
  }) {
    const repo = new _DeviceTypeRepository.default();
    const serviceFindDeviceType = new _ServiceFindDeviceType.ServiceFindDeviceType();
    const deviceType = await serviceFindDeviceType.execute({
      id
    });
    await repo.remove(deviceType);
    return true;
  }
}
exports.ServiceDeleteDeviceType = ServiceDeleteDeviceType;
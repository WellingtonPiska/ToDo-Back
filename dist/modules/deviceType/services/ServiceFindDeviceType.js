"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindDeviceType = void 0;
var _DeviceTypeRepository = _interopRequireDefault(require("../repository/DeviceTypeRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindDeviceType {
  async execute({
    id
  }) {
    const repo = new _DeviceTypeRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('DeviceType não encontrado');
    }
    return data;
  }
}
exports.ServiceFindDeviceType = ServiceFindDeviceType;
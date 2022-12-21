"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateDeviceType = void 0;
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _DeviceType = _interopRequireDefault(require("../entities/DeviceType"));
var _DeviceTypeRepository = _interopRequireDefault(require("../repository/DeviceTypeRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateDeviceType {
  async execute({
    name,
    obs
  }) {
    const repo = new _DeviceTypeRepository.default();
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({
      ref: 'A'
    });
    const deviceTypeValid = await repo.findByName(name);
    if (deviceTypeValid) {
      throw new Error('ContactType já existe');
    }
    const dty = new _DeviceType.default();
    dty.status = statusRef.id;
    dty.name = name;
    dty.obs = obs;
    const obj = await repo.create(dty);
    return obj;
  }
}
exports.ServiceCreateDeviceType = ServiceCreateDeviceType;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListDeviceType = void 0;
require("reflect-metadata");
var _DeviceTypeRepository = _interopRequireDefault(require("../repository/DeviceTypeRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListDeviceType {
  async execute({
    page,
    limit,
    ref,
    search
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _DeviceTypeRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take,
      ref,
      search
    });
    return list;
  }
}
exports.ServiceListDeviceType = ServiceListDeviceType;
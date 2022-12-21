"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateStatus = void 0;
var _StatusRepository = _interopRequireDefault(require("../repository/StatusRepository"));
var _ServiceFindStatus = require("./ServiceFindStatus");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateStatus {
  async execute({
    id,
    name,
    reference,
    color
  }) {
    const repo = new _StatusRepository.default();
    const serviceFindStatus = new _ServiceFindStatus.ServiceFindStatus();
    const status = await serviceFindStatus.execute({
      id
    });
    const valid = await repo.findValidUpdate(id, name, reference);
    if (valid) {
      throw new Error('Registro com valores duplicados.');
    }
    status.name = name;
    status.reference = reference.toUpperCase();
    status.color = color;
    await repo.update(status);
    return status;
  }
}
exports.ServiceUpdateStatus = ServiceUpdateStatus;
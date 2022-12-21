"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateStatus = void 0;
var _Status = _interopRequireDefault(require("../entities/Status"));
var _StatusRepository = _interopRequireDefault(require("../repository/StatusRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateStatus {
  async execute({
    name,
    reference,
    color
  }) {
    const repo = new _StatusRepository.default();
    const statusValid = await repo.findValid(name, reference);
    if (statusValid) {
      throw new Error('Registro com valores duplicados.');
    }
    const status = new _Status.default();
    status.name = name;
    status.reference = reference.toUpperCase();
    status.color = color;
    const obj = await repo.create(status);
    return obj;
  }
}
exports.ServiceCreateStatus = ServiceCreateStatus;
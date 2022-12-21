"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteStatus = void 0;
var _StatusRepository = _interopRequireDefault(require("../repository/StatusRepository"));
var _ServiceFindStatus = require("./ServiceFindStatus");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteStatus {
  async execute({
    id
  }) {
    const repo = new _StatusRepository.default();
    const serviceFindStatus = new _ServiceFindStatus.ServiceFindStatus();
    const status = await serviceFindStatus.execute({
      id
    });
    await repo.remove(status);
    return true;
  }
}
exports.ServiceDeleteStatus = ServiceDeleteStatus;
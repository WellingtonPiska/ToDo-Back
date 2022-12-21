"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindStatus = void 0;
var _StatusRepository = _interopRequireDefault(require("../repository/StatusRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindStatus {
  async execute({
    id
  }) {
    const repo = new _StatusRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('Status não encontrado.');
    }
    return data;
  }
}
exports.ServiceFindStatus = ServiceFindStatus;
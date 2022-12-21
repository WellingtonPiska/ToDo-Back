"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindRefStatus = void 0;
var _StatusRepository = _interopRequireDefault(require("../repository/StatusRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindRefStatus {
  async execute({
    ref
  }) {
    const repoStatus = new _StatusRepository.default();
    const status = await repoStatus.findByRef(ref);
    if (!status) {
      throw new Error('Status não existe');
    }
    return status;
  }
}
exports.ServiceFindRefStatus = ServiceFindRefStatus;
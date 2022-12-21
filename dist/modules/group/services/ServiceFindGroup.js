"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindGroup = void 0;
var _GroupRepository = _interopRequireDefault(require("../repository/GroupRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindGroup {
  async execute({
    id
  }) {
    const repo = new _GroupRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('Group não encontrado');
    }
    return data;
  }
}
exports.ServiceFindGroup = ServiceFindGroup;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindUser = void 0;
var _UserRepository = _interopRequireDefault(require("../repository/UserRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindUser {
  async execute({
    id
  }) {
    const repo = new _UserRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('User não encontrado');
    }
    return data;
  }
}
exports.ServiceFindUser = ServiceFindUser;
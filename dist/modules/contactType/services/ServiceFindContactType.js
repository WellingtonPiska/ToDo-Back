"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindContactType = void 0;
var _ContactTypeRepository = _interopRequireDefault(require("../repository/ContactTypeRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindContactType {
  async execute({
    id
  }) {
    const repo = new _ContactTypeRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('ContactType não encontrado');
    }
    return data;
  }
}
exports.ServiceFindContactType = ServiceFindContactType;
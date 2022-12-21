"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteContactType = void 0;
var _ContactTypeRepository = _interopRequireDefault(require("../repository/ContactTypeRepository"));
var _ServiceFindContactType = require("./ServiceFindContactType");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteContactType {
  async execute({
    id
  }) {
    const repo = new _ContactTypeRepository.default();
    const serviceFindContactType = new _ServiceFindContactType.ServiceFindContactType();
    const contactType = await serviceFindContactType.execute({
      id
    });
    await repo.remove(contactType);
    return true;
  }
}
exports.ServiceDeleteContactType = ServiceDeleteContactType;
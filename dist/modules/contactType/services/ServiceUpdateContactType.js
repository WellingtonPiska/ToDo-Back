"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateContactType = void 0;
var _ContactTypeRepository = _interopRequireDefault(require("../repository/ContactTypeRepository"));
var _ServiceFindContactType = require("./ServiceFindContactType");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateContactType {
  async execute({
    id,
    name
  }) {
    const repo = new _ContactTypeRepository.default();
    const serviceFindContactType = new _ServiceFindContactType.ServiceFindContactType();
    const contactType = await serviceFindContactType.execute({
      id
    });
    const contactTypeValid = await repo.findValidUpdate(id, name);
    if (contactTypeValid) {
      throw new Error('contactType duplicado');
    }
    contactType.name = name;
    await repo.update(contactType);
    return contactType;
  }
}
exports.ServiceUpdateContactType = ServiceUpdateContactType;
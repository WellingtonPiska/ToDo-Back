"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateContactType = void 0;
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _ContactType = _interopRequireDefault(require("../entities/ContactType"));
var _ContactTypeRepository = _interopRequireDefault(require("../repository/ContactTypeRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateContactType {
  async execute({
    name
  }) {
    const repo = new _ContactTypeRepository.default();
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({
      ref: 'A'
    });
    const contactTypeValid = await repo.findByName(name);
    if (contactTypeValid) {
      throw new Error('ContactType já existe');
    }
    const cty = new _ContactType.default();
    cty.name = name;
    cty.status = statusRef.id;
    const obj = await repo.create(cty);
    return obj;
  }
}
exports.ServiceCreateContactType = ServiceCreateContactType;
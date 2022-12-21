"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateGroupMenu = void 0;
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _GroupMenu = _interopRequireDefault(require("../entities/GroupMenu"));
var _GroupMenuRepository = _interopRequireDefault(require("../repository/GroupMenuRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateGroupMenu {
  async execute({
    name,
    description
  }) {
    const repo = new _GroupMenuRepository.default();
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({
      ref: 'A'
    });
    const groupMenuValid = await repo.findByName(name);
    if (groupMenuValid) {
      throw new Error('CostCenter já existe');
    }
    const gme = new _GroupMenu.default();
    gme.name = name;
    gme.description = description;
    gme.status = statusRef.id;
    const obj = await repo.create(gme);
    return obj;
  }
}
exports.ServiceCreateGroupMenu = ServiceCreateGroupMenu;
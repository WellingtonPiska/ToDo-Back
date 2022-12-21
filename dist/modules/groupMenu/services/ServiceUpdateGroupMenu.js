"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateGroupMenu = void 0;
var _GroupMenuRepository = _interopRequireDefault(require("../repository/GroupMenuRepository"));
var _ServiceFindGroupMenu = require("./ServiceFindGroupMenu");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateGroupMenu {
  async execute({
    id,
    name,
    description
  }) {
    const repo = new _GroupMenuRepository.default();
    const serviceFindGroupMenu = new _ServiceFindGroupMenu.ServiceFindGroupMenu();
    const groupMenu = await serviceFindGroupMenu.execute({
      id
    });
    const groupMenuValid = await repo.findValidUpdate(id, name);
    if (groupMenuValid) {
      throw new Error('groupMenu duplicado');
    }
    groupMenu.description = description;
    groupMenu.name = name;
    await repo.update(groupMenu);
    return groupMenu;
  }
}
exports.ServiceUpdateGroupMenu = ServiceUpdateGroupMenu;
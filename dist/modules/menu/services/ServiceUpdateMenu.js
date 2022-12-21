"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateMenu = void 0;
var _ServiceFindGroupMenu = require("../../groupMenu/services/ServiceFindGroupMenu");
var _MenuRepository = _interopRequireDefault(require("../repository/MenuRepository"));
var _ServiceFindMenu = require("./ServiceFindMenu");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateMenu {
  async execute({
    id,
    name,
    uri,
    icon,
    order,
    groupMenu,
    menuFather
  }) {
    const repo = new _MenuRepository.default();
    const serviceFindMenu = new _ServiceFindMenu.ServiceFindMenu();
    const menu = await serviceFindMenu.execute({
      id
    });
    const serviceFindGroupMenu = new _ServiceFindGroupMenu.ServiceFindGroupMenu();
    const groupMenuRef = await serviceFindGroupMenu.execute({
      id: groupMenu
    });
    let menuFatherRef = null;
    if (menuFather) {
      const serviceFindMenu = new _ServiceFindMenu.ServiceFindMenu();
      menuFatherRef = await serviceFindMenu.execute({
        id: menuFather
      });
    }
    const menuValid = await repo.findValidUpdate(id, name);
    if (menuValid) {
      throw new Error('Menu duplicado');
    }
    menu.order = order;
    menu.icon = icon;
    menu.name = name;
    menu.uri = uri;
    menu.groupMenu = groupMenuRef.id;
    menu.menuFather = menuFatherRef?.id;
    await repo.update(menu);
    return menu;
  }
}
exports.ServiceUpdateMenu = ServiceUpdateMenu;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateMenu = void 0;
var _ServiceFindGroupMenu = require("../../groupMenu/services/ServiceFindGroupMenu");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _Menu = _interopRequireDefault(require("../entities/Menu"));
var _MenuRepository = _interopRequireDefault(require("../repository/MenuRepository"));
var _ServiceFindMenu = require("./ServiceFindMenu");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateMenu {
  async execute({
    name,
    icon,
    order,
    uri,
    menuFather,
    groupMenu
  }) {
    const repo = new _MenuRepository.default();
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({
      ref: 'A'
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
    const sectorValid = await repo.findByName(name);
    if (sectorValid) {
      throw new Error('Sector já existe');
    }
    const menu = new _Menu.default();
    menu.uri = uri;
    menu.icon = icon;
    menu.name = name;
    menu.order = order;
    menu.groupMenu = groupMenuRef.id;
    menu.menuFather = menuFatherRef?.id;
    menu.status = statusRef.id;
    const obj = await repo.create(menu);
    return obj;
  }
}
exports.ServiceCreateMenu = ServiceCreateMenu;
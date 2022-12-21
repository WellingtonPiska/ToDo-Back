"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateMenuRoutes = void 0;
var _ServiceFindMenu = require("../../menu/services/ServiceFindMenu");
var _ServiceFindRoutes = require("../../routes/services/ServiceFindRoutes");
var _MenuRoutesRepository = _interopRequireDefault(require("../repository/MenuRoutesRepository"));
var _ServiceFindMenuRoutes = require("./ServiceFindMenuRoutes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateMenuRoutes {
  async execute({
    id,
    menu,
    routes
  }) {
    const repo = new _MenuRoutesRepository.default();
    const serviceFindMenuRoutes = new _ServiceFindMenuRoutes.ServiceFindMenuRoutes();
    const menuRoutes = await serviceFindMenuRoutes.execute({
      id
    });
    const serviceFindRoutes = new _ServiceFindRoutes.ServiceFindRoutes();
    const routesRef = await serviceFindRoutes.execute({
      id: routes
    });
    const serviceFindMenu = new _ServiceFindMenu.ServiceFindMenu();
    const menuRef = await serviceFindMenu.execute({
      id: menu
    });
    const menuValid = await repo.findValidUpdate(id);
    if (menuValid) {
      throw new Error('Menu duplicado');
    }
    menuRoutes.menu = menuRef.id;
    menuRoutes.routes = routesRef.id;
    await repo.update(menuRoutes);
    return menuRoutes;
  }
}
exports.ServiceUpdateMenuRoutes = ServiceUpdateMenuRoutes;
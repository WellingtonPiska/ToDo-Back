"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateMenuRoutes = void 0;
var _ServiceFindMenu = require("../../menu/services/ServiceFindMenu");
var _ServiceFindRoutes = require("../../routes/services/ServiceFindRoutes");
var _MenuRoutes = _interopRequireDefault(require("../entities/MenuRoutes"));
var _MenuRoutesRepository = _interopRequireDefault(require("../repository/MenuRoutesRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateMenuRoutes {
  async execute({
    menu,
    routes
  }) {
    const repo = new _MenuRoutesRepository.default();
    const serviceFindMenu = new _ServiceFindMenu.ServiceFindMenu();
    const menuRef = await serviceFindMenu.execute({
      id: menu
    });
    const serviceFindRoutes = new _ServiceFindRoutes.ServiceFindRoutes();
    const routesRef = await serviceFindRoutes.execute({
      id: routes
    });
    const mro = new _MenuRoutes.default();
    mro.menu = menuRef.id;
    mro.routes = routesRef.id;
    const obj = await repo.create(mro);
    return obj;
  }
}
exports.ServiceCreateMenuRoutes = ServiceCreateMenuRoutes;
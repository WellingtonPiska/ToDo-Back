"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateRoutes = void 0;
var _RoutesRepository = _interopRequireDefault(require("../repository/RoutesRepository"));
var _ServiceFindRoutes = require("./ServiceFindRoutes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateRoutes {
  async execute({
    id,
    method,
    description,
    uri
  }) {
    const repo = new _RoutesRepository.default();
    const serviceFindRoutes = new _ServiceFindRoutes.ServiceFindRoutes();
    const routes = await serviceFindRoutes.execute({
      id
    });
    const routesValid = await repo.findValidUpdate(id);
    if (routesValid) {
      throw new Error('Rota duplicada');
    }
    routes.description = description;
    routes.uri = uri;
    routes.method = method;
    await repo.update(routes);
    return routes;
  }
}
exports.ServiceUpdateRoutes = ServiceUpdateRoutes;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteRoutes = void 0;
var _RoutesRepository = _interopRequireDefault(require("../repository/RoutesRepository"));
var _ServiceFindRoutes = require("./ServiceFindRoutes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteRoutes {
  async execute({
    id
  }) {
    const repo = new _RoutesRepository.default();
    const serviceFindCosCenter = new _ServiceFindRoutes.ServiceFindRoutes();
    const routes = await serviceFindCosCenter.execute({
      id
    });
    await repo.remove(routes);
    return true;
  }
}
exports.ServiceDeleteRoutes = ServiceDeleteRoutes;
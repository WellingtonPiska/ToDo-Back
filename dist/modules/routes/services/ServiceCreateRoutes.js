"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateRoutes = void 0;
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _Routes = _interopRequireDefault(require("../entities/Routes"));
var _RoutesRepository = _interopRequireDefault(require("../repository/RoutesRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateRoutes {
  async execute({
    method,
    description,
    uri
  }) {
    const repo = new _RoutesRepository.default();
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({
      ref: 'A'
    });
    const rou = new _Routes.default();
    rou.uri = uri;
    rou.method = method;
    rou.status = statusRef.id;
    rou.description = description;
    const obj = await repo.create(rou);
    return obj;
  }
}
exports.ServiceCreateRoutes = ServiceCreateRoutes;
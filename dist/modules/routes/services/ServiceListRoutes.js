"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListRoutes = void 0;
require("reflect-metadata");
var _RoutesRepository = _interopRequireDefault(require("../repository/RoutesRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListRoutes {
  async execute({
    page,
    limit,
    ref
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _RoutesRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take,
      ref
    });
    return list;
  }
}
exports.ServiceListRoutes = ServiceListRoutes;
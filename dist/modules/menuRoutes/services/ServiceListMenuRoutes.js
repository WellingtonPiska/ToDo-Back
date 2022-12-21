"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListMenuRoutes = void 0;
require("reflect-metadata");
var _MenuRoutesRepository = _interopRequireDefault(require("../repository/MenuRoutesRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListMenuRoutes {
  async execute({
    page,
    limit
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _MenuRoutesRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take
    });
    return list;
  }
}
exports.ServiceListMenuRoutes = ServiceListMenuRoutes;
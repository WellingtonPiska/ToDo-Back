"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindRoutes = void 0;
var _RoutesRepository = _interopRequireDefault(require("../repository/RoutesRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindRoutes {
  async execute({
    id
  }) {
    const repo = new _RoutesRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('Routes não encontrado');
    }
    return data;
  }
}
exports.ServiceFindRoutes = ServiceFindRoutes;
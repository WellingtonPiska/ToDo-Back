"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindMenuRoutes = void 0;
var _MenuRoutesRepository = _interopRequireDefault(require("../repository/MenuRoutesRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindMenuRoutes {
  async execute({
    id
  }) {
    const repo = new _MenuRoutesRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('MenuRoutes não encontrado');
    }
    return data;
  }
}
exports.ServiceFindMenuRoutes = ServiceFindMenuRoutes;
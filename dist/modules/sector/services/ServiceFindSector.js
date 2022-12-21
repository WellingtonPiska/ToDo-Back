"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindSector = void 0;
var _SectorRepository = _interopRequireDefault(require("../repository/SectorRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindSector {
  async execute({
    id
  }) {
    const repo = new _SectorRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('Sector não encontrado');
    }
    return data;
  }
}
exports.ServiceFindSector = ServiceFindSector;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListSector = void 0;
require("reflect-metadata");
var _SectorRepository = _interopRequireDefault(require("../repository/SectorRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListSector {
  async execute({
    page,
    limit,
    ref
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _SectorRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take,
      ref
    });
    return list;
  }
}
exports.ServiceListSector = ServiceListSector;
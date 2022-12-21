"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListUserSector = void 0;
require("reflect-metadata");
var _UserSectorRepository = _interopRequireDefault(require("../repository/UserSectorRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListUserSector {
  async execute({
    page,
    limit
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _UserSectorRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take
    });
    return list;
  }
}
exports.ServiceListUserSector = ServiceListUserSector;
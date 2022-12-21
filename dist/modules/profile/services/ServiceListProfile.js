"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListProfile = void 0;
require("reflect-metadata");
var _ProfileRepository = _interopRequireDefault(require("../repository/ProfileRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListProfile {
  async execute({
    page,
    limit,
    ref,
    search
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _ProfileRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take,
      ref,
      search
    });
    return list;
  }
}
exports.ServiceListProfile = ServiceListProfile;
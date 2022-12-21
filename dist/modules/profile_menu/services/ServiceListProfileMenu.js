"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListProfileMenu = void 0;
require("reflect-metadata");
var _ProfileMenuRepository = _interopRequireDefault(require("../repository/ProfileMenuRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListProfileMenu {
  async execute({
    page,
    limit
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _ProfileMenuRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take
    });
    return list;
  }
}
exports.ServiceListProfileMenu = ServiceListProfileMenu;
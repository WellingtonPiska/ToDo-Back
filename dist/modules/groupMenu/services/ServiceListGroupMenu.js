"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListGroupMenu = void 0;
require("reflect-metadata");
var _GroupMenuRepository = _interopRequireDefault(require("../repository/GroupMenuRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListGroupMenu {
  async execute({
    page,
    limit,
    ref
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _GroupMenuRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take,
      ref
    });
    return list;
  }
}
exports.ServiceListGroupMenu = ServiceListGroupMenu;
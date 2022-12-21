"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListMenu = void 0;
require("reflect-metadata");
var _MenuRepository = _interopRequireDefault(require("../repository/MenuRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListMenu {
  async execute({
    page,
    limit,
    ref
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _MenuRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take,
      ref
    });
    return list;
  }
}
exports.ServiceListMenu = ServiceListMenu;
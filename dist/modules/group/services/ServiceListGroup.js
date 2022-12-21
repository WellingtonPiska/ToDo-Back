"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListGroup = void 0;
require("reflect-metadata");
var _GroupRepository = _interopRequireDefault(require("../repository/GroupRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListGroup {
  async execute({
    page,
    limit,
    ref
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _GroupRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take,
      ref
    });
    return list;
  }
}
exports.ServiceListGroup = ServiceListGroup;
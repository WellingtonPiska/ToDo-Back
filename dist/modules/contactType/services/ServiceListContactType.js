"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListContactType = void 0;
require("reflect-metadata");
var _ContactTypeRepository = _interopRequireDefault(require("../repository/ContactTypeRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListContactType {
  async execute({
    page,
    limit,
    ref,
    search
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _ContactTypeRepository.default();
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
exports.ServiceListContactType = ServiceListContactType;
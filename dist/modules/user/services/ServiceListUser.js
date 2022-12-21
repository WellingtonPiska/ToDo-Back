"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListUser = void 0;
require("reflect-metadata");
var _UserRepository = _interopRequireDefault(require("../repository/UserRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListUser {
  async execute({
    page,
    limit,
    ref
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _UserRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take,
      ref
    });
    return list;
  }
}
exports.ServiceListUser = ServiceListUser;
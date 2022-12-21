"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListModel = void 0;
require("reflect-metadata");
var _ModelRepository = _interopRequireDefault(require("../repository/ModelRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListModel {
  async execute({
    page,
    limit,
    ref
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _ModelRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take,
      ref
    });
    return list;
  }
}
exports.ServiceListModel = ServiceListModel;
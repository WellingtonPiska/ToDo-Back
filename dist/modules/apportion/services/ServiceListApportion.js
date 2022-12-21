"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListApportion = void 0;
require("reflect-metadata");
var _ApportionRepository = _interopRequireDefault(require("../repository/ApportionRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListApportion {
  async execute({
    page,
    limit
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _ApportionRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take
    });
    return list;
  }
}
exports.ServiceListApportion = ServiceListApportion;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListStatus = void 0;
var _StatusRepository = _interopRequireDefault(require("../repository/StatusRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListStatus {
  async execute({
    page,
    limit
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _StatusRepository.default();
    const list = await repo.findAll({
      page,
      skip,
      take
    });
    return list;
  }
}
exports.ServiceListStatus = ServiceListStatus;
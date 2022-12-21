"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListCompany = void 0;
require("reflect-metadata");
var _CompanyRepository = _interopRequireDefault(require("../repository/CompanyRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListCompany {
  async execute({
    page,
    limit,
    ref,
    search
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _CompanyRepository.default();
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
exports.ServiceListCompany = ServiceListCompany;
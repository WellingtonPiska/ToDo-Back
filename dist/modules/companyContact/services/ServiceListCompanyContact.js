"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceListCompanyContact = void 0;
var _CompanyContactRepository = _interopRequireDefault(require("../repository/CompanyContactRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceListCompanyContact {
  async execute({
    company,
    page,
    limit,
    search
  }) {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    const repo = new _CompanyContactRepository.default();
    const list = await repo.findAll({
      company,
      page,
      skip,
      take,
      search
    });
    return list;
  }
}
exports.ServiceListCompanyContact = ServiceListCompanyContact;
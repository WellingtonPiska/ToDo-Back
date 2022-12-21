"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteCompany = void 0;
var _CompanyRepository = _interopRequireDefault(require("../repository/CompanyRepository"));
var _ServiceFindCompany = require("./ServiceFindCompany");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteCompany {
  async execute({
    id
  }) {
    const repo = new _CompanyRepository.default();
    const serviceFindCompany = new _ServiceFindCompany.ServiceFindCompany();
    const company = await serviceFindCompany.execute({
      id
    });
    await repo.remove(company);
    return true;
  }
}
exports.ServiceDeleteCompany = ServiceDeleteCompany;
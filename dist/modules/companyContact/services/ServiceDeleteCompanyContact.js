"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteCompanyContact = void 0;
var _CompanyContactRepository = _interopRequireDefault(require("../repository/CompanyContactRepository"));
var _ServiceFindCompanyContact = require("./ServiceFindCompanyContact");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteCompanyContact {
  async execute({
    id,
    company
  }) {
    const repo = new _CompanyContactRepository.default();
    const serviceFindCompanyContact = new _ServiceFindCompanyContact.ServiceFindCompanyContact();
    const companyContact = await serviceFindCompanyContact.execute({
      id,
      company
    });
    await repo.remove(companyContact);
    return true;
  }
}
exports.ServiceDeleteCompanyContact = ServiceDeleteCompanyContact;
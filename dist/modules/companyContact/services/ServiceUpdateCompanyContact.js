"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateCompanyContact = void 0;
var _ServiceFindCompany = require("../../company/services/ServiceFindCompany");
var _ServiceFindContactType = require("../../contactType/services/ServiceFindContactType");
var _CompanyContactRepository = _interopRequireDefault(require("../repository/CompanyContactRepository"));
var _ServiceFindCompanyContact = require("./ServiceFindCompanyContact");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateCompanyContact {
  async execute({
    id,
    name,
    mail,
    phone,
    mobile,
    company,
    contactType
  }) {
    const repo = new _CompanyContactRepository.default();
    const serviceFindCompanyContact = new _ServiceFindCompanyContact.ServiceFindCompanyContact();
    const companyC = await serviceFindCompanyContact.execute({
      id,
      company
    });
    const serviceFindCompany = new _ServiceFindCompany.ServiceFindCompany();
    const companyRef = await serviceFindCompany.execute({
      id: company
    });
    const serviceFindContactType = new _ServiceFindContactType.ServiceFindContactType();
    const contactTypeRef = await serviceFindContactType.execute({
      id: contactType
    });
    const companyValid = await repo.findValidUpdate(id, name);
    if (companyValid) {
      throw new Error('company duplicado');
    }
    companyC.company = companyRef.id;
    companyC.contactType = contactTypeRef.id;
    companyC.name = name;
    companyC.mail = mail;
    companyC.phone = phone;
    companyC.mobile = mobile;
    await repo.update(companyC);
    return companyC;
  }
}
exports.ServiceUpdateCompanyContact = ServiceUpdateCompanyContact;
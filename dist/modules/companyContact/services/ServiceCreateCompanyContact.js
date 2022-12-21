"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateCompanyContact = void 0;
var _ServiceFindCompany = require("../../company/services/ServiceFindCompany");
var _ServiceFindContactType = require("../../contactType/services/ServiceFindContactType");
var _CompanyContact = _interopRequireDefault(require("../entities/CompanyContact"));
var _CompanyContactRepository = _interopRequireDefault(require("../repository/CompanyContactRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateCompanyContact {
  async execute({
    name,
    contactType,
    mail,
    phone,
    mobile,
    company
  }) {
    const repo = new _CompanyContactRepository.default();
    const serviceFindContactType = new _ServiceFindContactType.ServiceFindContactType();
    const contactTypeRef = await serviceFindContactType.execute({
      id: contactType
    });
    const serviceFindCompany = new _ServiceFindCompany.ServiceFindCompany();
    const companyRef = await serviceFindCompany.execute({
      id: company
    });
    const companyContactValid = await repo.findByName(name);
    if (companyContactValid) {
      throw new Error('CompanyContact já existe');
    }
    const cco = new _CompanyContact.default();
    cco.name = name;
    cco.company = companyRef.id;
    cco.contactType = contactTypeRef.id;
    cco.mail = mail;
    cco.phone = phone;
    cco.mobile = mobile;
    const obj = await repo.create(cco);
    return obj;
  }
}
exports.ServiceCreateCompanyContact = ServiceCreateCompanyContact;
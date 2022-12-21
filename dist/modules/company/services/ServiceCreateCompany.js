"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateCompany = void 0;
var _CompanyContact = _interopRequireDefault(require("../../companyContact/entities/CompanyContact"));
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _Company = _interopRequireDefault(require("../entities/Company"));
var _CompanyRepository = _interopRequireDefault(require("../repository/CompanyRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateCompany {
  async execute({
    name,
    fantasy,
    type,
    inscription,
    zipCode,
    street,
    complement,
    number,
    district,
    city,
    state,
    contacts
  }) {
    const repo = new _CompanyRepository.default();
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({
      ref: 'A'
    });
    const companyValid = await repo.findByName(name);
    if (companyValid) {
      throw new Error('Company já existe');
    }
    const com = new _Company.default();
    com.name = name;
    com.status = statusRef.id;
    com.fantasy = fantasy;
    com.type = type;
    com.inscription = inscription;
    com.zipCode = zipCode;
    com.street = street;
    com.complement = complement;
    com.number = number;
    com.district = district;
    com.city = city;
    com.state = state;
    const contactsCompany = [];
    if (contacts) {
      // eslint-disable-next-line no-restricted-syntax
      for await (const contact of contacts) {
        const contactCompany = new _CompanyContact.default();
        contactCompany.name = contact.name;
        contactCompany.contactType = contact.contactType;
        contactCompany.mail = contact.mail;
        contactCompany.phone = contact.phone;
        contactCompany.mobile = contact.mobile;
        contactsCompany.push(contactCompany);
      }
    }
    const obj = await repo.create(com, contactsCompany);
    return obj;
  }
}
exports.ServiceCreateCompany = ServiceCreateCompany;
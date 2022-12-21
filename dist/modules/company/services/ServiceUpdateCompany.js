"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateCompany = void 0;
var _CompanyRepository = _interopRequireDefault(require("../repository/CompanyRepository"));
var _ServiceFindCompany = require("./ServiceFindCompany");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateCompany {
  async execute({
    id,
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
    state
  }) {
    const repo = new _CompanyRepository.default();
    const serviceFindCompany = new _ServiceFindCompany.ServiceFindCompany();
    const company = await serviceFindCompany.execute({
      id
    });
    const companyValid = await repo.findValidUpdate(id, name);
    if (companyValid) {
      throw new Error('company duplicado');
    }
    company.name = name;
    company.fantasy = fantasy;
    company.type = type;
    company.inscription = inscription;
    company.zipCode = zipCode;
    company.street = street;
    company.complement = complement;
    company.number = number;
    company.district = district;
    company.city = city;
    company.state = state;
    await repo.update(company);
    return company;
  }
}
exports.ServiceUpdateCompany = ServiceUpdateCompany;
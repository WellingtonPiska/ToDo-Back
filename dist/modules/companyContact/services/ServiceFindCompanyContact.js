"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindCompanyContact = void 0;
var _CompanyContactRepository = _interopRequireDefault(require("../repository/CompanyContactRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindCompanyContact {
  async execute({
    company,
    id
  }) {
    const repo = new _CompanyContactRepository.default();
    const data = await repo.findById(company, id);
    if (!data) {
      throw new Error('CompanyContact não encontrado');
    }
    return data;
  }
}
exports.ServiceFindCompanyContact = ServiceFindCompanyContact;
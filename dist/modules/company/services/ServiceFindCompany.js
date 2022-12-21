"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindCompany = void 0;
var _CompanyRepository = _interopRequireDefault(require("../repository/CompanyRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindCompany {
  async execute({
    id
  }) {
    const repo = new _CompanyRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('Company não encontrado');
    }
    return data;
  }
}
exports.ServiceFindCompany = ServiceFindCompany;
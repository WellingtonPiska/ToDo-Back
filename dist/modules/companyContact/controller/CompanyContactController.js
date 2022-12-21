"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateCompanyContact = require("../services/ServiceCreateCompanyContact");
var _ServiceDeleteCompanyContact = require("../services/ServiceDeleteCompanyContact");
var _ServiceFindCompanyContact = require("../services/ServiceFindCompanyContact");
var _ServiceListCompanyContact = require("../services/ServiceListCompanyContact");
var _ServiceUpdateCompanyContact = require("../services/ServiceUpdateCompanyContact");
class ControllerCompanyContact {
  async list(request, response) {
    const {
      company
    } = request.params;
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const search = request.query.search ? String(request.query.search) : undefined;
    const serviceListCompanyContact = new _ServiceListCompanyContact.ServiceListCompanyContact();
    const companyContact = await serviceListCompanyContact.execute({
      company,
      page,
      limit,
      search
    });
    return response.json(companyContact);
  }
  async find(request, response) {
    const {
      company,
      id
    } = request.params;
    const serviceFindCompanyContact = new _ServiceFindCompanyContact.ServiceFindCompanyContact();
    const data = await serviceFindCompanyContact.execute({
      company,
      id
    });
    return response.json(data);
  }
  async create(request, response) {
    const {
      name,
      contactType,
      mail,
      phone,
      mobile
    } = request.body;
    const {
      company
    } = request.params;
    const serviceCreateCompanyContact = new _ServiceCreateCompanyContact.ServiceCreateCompanyContact();
    const contactCompany = await serviceCreateCompanyContact.execute({
      name,
      contactType,
      company,
      mail,
      phone,
      mobile
    });
    return response.json(contactCompany);
  }
  async delete(request, response) {
    const {
      id,
      company
    } = request.params;
    const serviceDeleteCompanyContact = new _ServiceDeleteCompanyContact.ServiceDeleteCompanyContact();
    const companyContact = await serviceDeleteCompanyContact.execute({
      id,
      company
    });
    return response.json(companyContact);
  }
  async update(request, response) {
    const {
      name,
      mail,
      phone,
      mobile,
      contactType
    } = request.body;
    const {
      id,
      company
    } = request.params;
    const serviceUpdateCompanyContact = new _ServiceUpdateCompanyContact.ServiceUpdateCompanyContact();
    const companyContact = await serviceUpdateCompanyContact.execute({
      id,
      name,
      mail,
      phone,
      mobile,
      contactType,
      company
    });
    return response.json(companyContact);
  }
}
exports.default = ControllerCompanyContact;
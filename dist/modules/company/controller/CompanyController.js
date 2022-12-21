"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateCompany = require("../services/ServiceCreateCompany");
var _ServiceDeleteCompany = require("../services/ServiceDeleteCompany");
var _ServiceFindCompany = require("../services/ServiceFindCompany");
var _ServiceListCompany = require("../services/ServiceListCompany");
var _ServiceUpdateCompany = require("../services/ServiceUpdateCompany");
class CompanyController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const search = request.query.search ? String(request.query.search) : undefined;
    const serviceListCompany = new _ServiceListCompany.ServiceListCompany();
    const company = await serviceListCompany.execute({
      page,
      limit,
      ref,
      search
    });
    return response.json(company);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindCompany = new _ServiceFindCompany.ServiceFindCompany();
    const company = await serviceFindCompany.execute({
      id
    });
    return response.json(company);
  }
  async create(request, response) {
    const {
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
    } = request.body;
    const serviceCreateCompany = new _ServiceCreateCompany.ServiceCreateCompany();
    const company = await serviceCreateCompany.execute({
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
    });
    return response.json(company);
  }
  async update(request, response) {
    const {
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
    } = request.body;
    const {
      id
    } = request.params;
    const serviceUpdateCompany = new _ServiceUpdateCompany.ServiceUpdateCompany();
    const company = await serviceUpdateCompany.execute({
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
    });
    return response.json(company);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteCompany = new _ServiceDeleteCompany.ServiceDeleteCompany();
    const company = await serviceDeleteCompany.execute({
      id
    });
    return response.json(company);
  }
}
exports.default = CompanyController;
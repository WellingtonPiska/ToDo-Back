"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateContactType = require("../services/ServiceCreateContactType");
var _ServiceDeleteContactType = require("../services/ServiceDeleteContactType");
var _ServiceFindContactType = require("../services/ServiceFindContactType");
var _ServiceListContactType = require("../services/ServiceListContactType");
var _ServiceUpdateContactType = require("../services/ServiceUpdateContactType");
class CostCenterController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const search = request.query.search ? String(request.query.search) : undefined;
    const serviceListContactType = new _ServiceListContactType.ServiceListContactType();
    const contactType = await serviceListContactType.execute({
      page,
      limit,
      ref,
      search
    });
    return response.json(contactType);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindContactType = new _ServiceFindContactType.ServiceFindContactType();
    const contactType = await serviceFindContactType.execute({
      id
    });
    return response.json(contactType);
  }
  async create(request, response) {
    const {
      name
    } = request.body;
    const serviceCreateContactType = new _ServiceCreateContactType.ServiceCreateContactType();
    const contactType = await serviceCreateContactType.execute({
      name
    });
    return response.json(contactType);
  }
  async update(request, response) {
    const {
      name
    } = request.body;
    const {
      id
    } = request.params;
    const serviceUpdateContactType = new _ServiceUpdateContactType.ServiceUpdateContactType();
    const contactType = await serviceUpdateContactType.execute({
      id,
      name
    });
    return response.json(contactType);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteContactType = new _ServiceDeleteContactType.ServiceDeleteContactType();
    const contactType = await serviceDeleteContactType.execute({
      id
    });
    return response.json(contactType);
  }
}
exports.default = CostCenterController;
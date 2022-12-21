"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateCostCenter = require("../services/ServiceCreateCostCenter");
var _ServiceDeleteCostCenter = require("../services/ServiceDeleteCostCenter");
var _ServiceFindCostCenter = require("../services/ServiceFindCostCenter");
var _ServiceListCostCenter = require("../services/ServiceListCostCenter");
var _ServiceUpdateCostCenter = require("../services/ServiceUpdateCostCenter");
class CostCenterController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListCostCenter = new _ServiceListCostCenter.ServiceListCostCenter();
    const costCenter = await serviceListCostCenter.execute({
      page,
      limit,
      ref
    });
    return response.json(costCenter);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindCostCenter = new _ServiceFindCostCenter.ServiceFindCostCenter();
    const costCenter = await serviceFindCostCenter.execute({
      id
    });
    return response.json(costCenter);
  }
  async create(request, response) {
    const {
      name,
      apportion,
      obs
    } = request.body;
    const serviceCreateCostCenter = new _ServiceCreateCostCenter.ServiceCreateCostCenter();
    const costCenter = await serviceCreateCostCenter.execute({
      name,
      apportion,
      obs
    });
    return response.json(costCenter);
  }
  async update(request, response) {
    const {
      name,
      apportion,
      obs
    } = request.body;
    const {
      id
    } = request.params;
    const serviceUpdateCostCenter = new _ServiceUpdateCostCenter.ServiceUpdateCostCenter();
    const costCenter = await serviceUpdateCostCenter.execute({
      id,
      name,
      apportion,
      obs
    });
    return response.json(costCenter);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteCostCenter = new _ServiceDeleteCostCenter.ServiceDeleteCostCenter();
    const costCenter = await serviceDeleteCostCenter.execute({
      id
    });
    return response.json(costCenter);
  }
}
exports.default = CostCenterController;
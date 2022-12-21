"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateApportion = require("../services/ServiceCreateApportion");
var _ServiceDeleteApportion = require("../services/ServiceDeleteApportion");
var _ServiceFindApportion = require("../services/ServiceFindApportion");
var _ServiceListApportion = require("../services/ServiceListApportion");
var _ServiceUpdateApportion = require("../services/ServiceUpdateApportion");
class CostCenterController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const serviceListApportion = new _ServiceListApportion.ServiceListApportion();
    const apportion = await serviceListApportion.execute({
      page,
      limit
    });
    return response.json(apportion);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindApportion = new _ServiceFindApportion.ServiceFindApportion();
    const data = await serviceFindApportion.execute({
      id
    });
    return response.json(data);
  }
  async create(request, response) {
    const {
      value,
      costCenter,
      apportion
    } = request.body;
    const serviceCreateApportion = new _ServiceCreateApportion.ServiceCreateApportion();
    const app = await serviceCreateApportion.execute({
      value,
      apportion,
      costCenter
    });
    return response.json(app);
  }
  async update(request, response) {
    const {
      value,
      apportion,
      costCenter
    } = request.body;
    const {
      id
    } = request.params;
    const serviceUpdateApportion = new _ServiceUpdateApportion.ServiceUpdateApportion();
    const app = await serviceUpdateApportion.execute({
      id,
      value,
      apportion,
      costCenter
    });
    return response.json(app);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteApportion = new _ServiceDeleteApportion.ServiceDeleteApportion();
    const app = await serviceDeleteApportion.execute({
      id
    });
    return response.json(app);
  }
}
exports.default = CostCenterController;
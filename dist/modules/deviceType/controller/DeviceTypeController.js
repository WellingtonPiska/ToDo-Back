"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateDeviceType = require("../services/ServiceCreateDeviceType");
var _ServiceDeleteDeviceType = require("../services/ServiceDeleteDeviceType");
var _ServiceFindDeviceType = require("../services/ServiceFindDeviceType");
var _ServiceListDeviceType = require("../services/ServiceListDeviceType");
var _ServiceUpdateDeviceType = require("../services/ServiceUpdateDeviceType");
class CostCenterController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const search = request.query.search ? String(request.query.search) : undefined;
    const serviceListDeviceType = new _ServiceListDeviceType.ServiceListDeviceType();
    const deviceType = await serviceListDeviceType.execute({
      page,
      limit,
      ref,
      search
    });
    return response.json(deviceType);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindDeviceType = new _ServiceFindDeviceType.ServiceFindDeviceType();
    const deviceType = await serviceFindDeviceType.execute({
      id
    });
    return response.json(deviceType);
  }
  async create(request, response) {
    const {
      name,
      obs
    } = request.body;
    const serviceCreateDeviceType = new _ServiceCreateDeviceType.ServiceCreateDeviceType();
    const deviceType = await serviceCreateDeviceType.execute({
      name,
      obs
    });
    return response.json(deviceType);
  }
  async update(request, response) {
    const {
      name,
      obs
    } = request.body;
    const {
      id
    } = request.params;
    const serviceUpdateDeviceType = new _ServiceUpdateDeviceType.ServiceUpdateDeviceType();
    const deviceType = await serviceUpdateDeviceType.execute({
      id,
      name,
      obs
    });
    return response.json(deviceType);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteDeviceType = new _ServiceDeleteDeviceType.ServiceDeleteDeviceType();
    const deviceType = await serviceDeleteDeviceType.execute({
      id
    });
    return response.json(deviceType);
  }
}
exports.default = CostCenterController;
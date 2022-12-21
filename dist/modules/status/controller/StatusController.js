"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateStatus = require("../services/ServiceCreateStatus");
var _ServiceDeleteStatus = require("../services/ServiceDeleteStatus");
var _ServiceFindStatus = require("../services/ServiceFindStatus");
var _ServiceListStatus = require("../services/ServiceListStatus");
var _ServiceUpdateStatus = require("../services/ServiceUpdateStatus");
class StatusController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const svcList = new _ServiceListStatus.ServiceListStatus();
    const data = await svcList.execute({
      page,
      limit
    });
    return response.json(data);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const svcFind = new _ServiceFindStatus.ServiceFindStatus();
    const data = await svcFind.execute({
      id
    });
    return response.json(data);
  }
  async create(request, response) {
    const {
      name,
      reference,
      color
    } = request.body;
    const serviceCreateStatus = new _ServiceCreateStatus.ServiceCreateStatus();
    const result = await serviceCreateStatus.execute({
      name,
      reference,
      color
    });
    return response.json(result);
  }
  async update(request, response) {
    const {
      name,
      reference,
      color
    } = request.body;
    const {
      id
    } = request.params;
    const serviceUpdateStatus = new _ServiceUpdateStatus.ServiceUpdateStatus();
    const status = await serviceUpdateStatus.execute({
      id,
      name,
      reference,
      color
    });
    return response.json(status);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteStatus = new _ServiceDeleteStatus.ServiceDeleteStatus();
    const deleted = await serviceDeleteStatus.execute({
      id
    });
    return response.json(deleted);
  }
}
exports.default = StatusController;
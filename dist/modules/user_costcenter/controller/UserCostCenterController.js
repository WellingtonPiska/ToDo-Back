"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateUserCostCenter = require("../services/ServiceCreateUserCostCenter");
var _ServiceDeleteUserCostCenter = require("../services/ServiceDeleteUserCostCenter");
var _ServiceFindUserCostCenter = require("../services/ServiceFindUserCostCenter");
var _ServiceListUserCostCenter = require("../services/ServiceListUserCostCenter");
var _ServiceUpdateUserCostCenter = require("../services/ServiceUpdateUserCostCenter");
class UserController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const serviceListUserCostCenter = new _ServiceListUserCostCenter.ServiceListUserCostCenter();
    const ucc = await serviceListUserCostCenter.execute({
      page,
      limit
    });
    return response.json(ucc);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindUserCostCenter = new _ServiceFindUserCostCenter.ServiceFindUserCostCenter();
    const data = await serviceFindUserCostCenter.execute({
      id
    });
    return response.json(data);
  }
  async create(request, response) {
    const {
      costCenter,
      user
    } = request.body;
    const serviceCreateUserCostCenter = new _ServiceCreateUserCostCenter.ServiceCreateUserCostCenter();
    const result = await serviceCreateUserCostCenter.execute({
      user,
      costCenter
    });
    return response.json(result);
  }
  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      user,
      costCenter
    } = request.body;
    const serviceUpdateUserCostCenter = new _ServiceUpdateUserCostCenter.ServiceUpdateUserCostCenter();
    const data = await serviceUpdateUserCostCenter.execute({
      id,
      costCenter,
      user
    });
    return response.json(data);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteUserCostCenter = new _ServiceDeleteUserCostCenter.ServiceDeleteUserCostCenter();
    const data = await serviceDeleteUserCostCenter.execute({
      id
    });
    return response.json(data);
  }
}
exports.default = UserController;
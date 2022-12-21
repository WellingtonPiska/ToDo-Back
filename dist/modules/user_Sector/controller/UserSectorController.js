"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateUserSector = require("../services/ServiceCreateUserSector");
var _ServiceDeleteUserSector = require("../services/ServiceDeleteUserSector");
var _ServiceFindUserSector = require("../services/ServiceFindUserSector");
var _ServiceListUserSector = require("../services/ServiceListUserSector");
var _ServiceUpdateUserSector = require("../services/ServiceUpdateUserSector");
class ControllerUserSector {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const serviceListUserSector = new _ServiceListUserSector.ServiceListUserSector();
    const userSector = await serviceListUserSector.execute({
      page,
      limit
    });
    return response.json(userSector);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindUserSector = new _ServiceFindUserSector.ServiceFindUserSector();
    const userSector = await serviceFindUserSector.execute({
      id
    });
    return response.json(userSector);
  }
  async create(request, response) {
    const {
      costCenter,
      user
    } = request.body;
    const serviceCreateUserSector = new _ServiceCreateUserSector.ServiceCreateUserSector();
    const userSector = await serviceCreateUserSector.execute({
      user,
      costCenter
    });
    return response.json(userSector);
  }
  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      user,
      costCenter
    } = request.body;
    const serviceUpdateUserSector = new _ServiceUpdateUserSector.ServiceUpdateUserSector();
    const userSector = await serviceUpdateUserSector.execute({
      id,
      costCenter,
      user
    });
    return response.json(userSector);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteUserSector = new _ServiceDeleteUserSector.ServiceDeleteUserSector();
    const userSector = await serviceDeleteUserSector.execute({
      id
    });
    return response.json(userSector);
  }
}
exports.default = ControllerUserSector;
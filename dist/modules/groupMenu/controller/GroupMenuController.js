"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateGroupMenu = require("../services/ServiceCreateGroupMenu");
var _ServiceDeleteGroupMenu = require("../services/ServiceDeleteGroupMenu");
var _ServiceFindGroupMenu = require("../services/ServiceFindGroupMenu");
var _ServiceListGroupMenu = require("../services/ServiceListGroupMenu");
var _ServiceUpdateGroupMenu = require("../services/ServiceUpdateGroupMenu");
class CostCenterController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListGroupMenu = new _ServiceListGroupMenu.ServiceListGroupMenu();
    const groupMenu = await serviceListGroupMenu.execute({
      page,
      limit,
      ref
    });
    return response.json(groupMenu);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindGroupMenu = new _ServiceFindGroupMenu.ServiceFindGroupMenu();
    const groupMenu = await serviceFindGroupMenu.execute({
      id
    });
    return response.json(groupMenu);
  }
  async create(request, response) {
    const {
      name,
      description
    } = request.body;
    const serviceCreateGroupMenu = new _ServiceCreateGroupMenu.ServiceCreateGroupMenu();
    const groupMenu = await serviceCreateGroupMenu.execute({
      name,
      description
    });
    return response.json(groupMenu);
  }
  async update(request, response) {
    const {
      name,
      description
    } = request.body;
    const {
      id
    } = request.params;
    const serviceUpdateGroupMenu = new _ServiceUpdateGroupMenu.ServiceUpdateGroupMenu();
    const groupMenu = await serviceUpdateGroupMenu.execute({
      id,
      name,
      description
    });
    return response.json(groupMenu);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteGroupMenu = new _ServiceDeleteGroupMenu.ServiceDeleteGroupMenu();
    const groupMenu = await serviceDeleteGroupMenu.execute({
      id
    });
    return response.json(groupMenu);
  }
}
exports.default = CostCenterController;
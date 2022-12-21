"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateMenuRoutes = require("../services/ServiceCreateMenuRoutes");
var _ServiceDeleteMenuRoutes = require("../services/ServiceDeleteMenuRoutes");
var _ServiceFindMenuRoutes = require("../services/ServiceFindMenuRoutes");
var _ServiceListMenuRoutes = require("../services/ServiceListMenuRoutes");
var _ServiceUpdateMenuRoutes = require("../services/ServiceUpdateMenuRoutes");
class UserController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const serviceListMenuRoutes = new _ServiceListMenuRoutes.ServiceListMenuRoutes();
    const ucc = await serviceListMenuRoutes.execute({
      page,
      limit
    });
    return response.json(ucc);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindMenuRoutes = new _ServiceFindMenuRoutes.ServiceFindMenuRoutes();
    const menuRoutes = await serviceFindMenuRoutes.execute({
      id
    });
    return response.json(menuRoutes);
  }
  async create(request, response) {
    const {
      menu,
      routes
    } = request.body;
    const serviceCreateMenuRoutes = new _ServiceCreateMenuRoutes.ServiceCreateMenuRoutes();
    const result = await serviceCreateMenuRoutes.execute({
      routes,
      menu
    });
    return response.json(result);
  }
  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      menu,
      routes
    } = request.body;
    const serviceUpdateMenuRoutes = new _ServiceUpdateMenuRoutes.ServiceUpdateMenuRoutes();
    const data = await serviceUpdateMenuRoutes.execute({
      id,
      menu,
      routes
    });
    return response.json(data);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteMenuRoutes = new _ServiceDeleteMenuRoutes.ServiceDeleteMenuRoutes();
    const menuRoutes = await serviceDeleteMenuRoutes.execute({
      id
    });
    return response.json(menuRoutes);
  }
}
exports.default = UserController;
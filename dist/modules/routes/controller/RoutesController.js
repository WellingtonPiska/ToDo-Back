"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateRoutes = require("../services/ServiceCreateRoutes");
var _ServiceDeleteRoutes = require("../services/ServiceDeleteRoutes");
var _ServiceFindRoutes = require("../services/ServiceFindRoutes");
var _ServiceListRoutes = require("../services/ServiceListRoutes");
var _ServiceUpdateRoutes = require("../services/ServiceUpdateRoutes");
class RoutesController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListRoutes = new _ServiceListRoutes.ServiceListRoutes();
    const routes = await serviceListRoutes.execute({
      page,
      limit,
      ref
    });
    return response.json(routes);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindRoutes = new _ServiceFindRoutes.ServiceFindRoutes();
    const routes = await serviceFindRoutes.execute({
      id
    });
    return response.json(routes);
  }
  async create(request, response) {
    const {
      method,
      description,
      uri
    } = request.body;
    const serviceCreateRoutes = new _ServiceCreateRoutes.ServiceCreateRoutes();
    const routes = await serviceCreateRoutes.execute({
      method,
      description,
      uri
    });
    return response.json(routes);
  }
  async update(request, response) {
    const {
      method,
      uri,
      description
    } = request.body;
    const {
      id
    } = request.params;
    const serviceUpdateRoutes = new _ServiceUpdateRoutes.ServiceUpdateRoutes();
    const routes = await serviceUpdateRoutes.execute({
      id,
      method,
      uri,
      description
    });
    return response.json(routes);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteRoutes = new _ServiceDeleteRoutes.ServiceDeleteRoutes();
    const routes = await serviceDeleteRoutes.execute({
      id
    });
    return response.json(routes);
  }
}
exports.default = RoutesController;
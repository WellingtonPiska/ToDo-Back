"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateModel = require("../services/ServiceCreateModel");
var _ServiceDeleteModel = require("../services/ServiceDeleteModel");
var _ServiceFindModel = require("../services/ServiceFindModel");
var _ServiceListModel = require("../services/ServiceListModel");
var _ServiceUpdateModel = require("../services/ServiceUpdateModel");
class ModelController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListModel = new _ServiceListModel.ServiceListModel();
    const model = await serviceListModel.execute({
      page,
      limit,
      ref
    });
    return response.json(model);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindModel = new _ServiceFindModel.ServiceFindModel();
    const model = await serviceFindModel.execute({
      id
    });
    return response.json(model);
  }
  async create(request, response) {
    const {
      name,
      company,
      deviceType,
      description
    } = request.body;
    const serviceCreateModel = new _ServiceCreateModel.ServiceCreateModel();
    const model = await serviceCreateModel.execute({
      name,
      company,
      deviceType,
      description
    });
    return response.json(model);
  }
  async update(request, response) {
    const {
      name,
      company,
      description,
      deviceType
    } = request.body;
    const {
      id
    } = request.params;
    const serviceUpdateModel = new _ServiceUpdateModel.ServiceUpdateModel();
    const model = await serviceUpdateModel.execute({
      id,
      name,
      company,
      deviceType,
      description
    });
    return response.json(model);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteModel = new _ServiceDeleteModel.ServiceDeleteModel();
    const model = await serviceDeleteModel.execute({
      id
    });
    return response.json(model);
  }
}
exports.default = ModelController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateGroup = require("../services/ServiceCreateGroup");
var _ServiceDeleteGroup = require("../services/ServiceDeleteGroup");
var _ServiceFindGroup = require("../services/ServiceFindGroup");
var _ServiceListGroup = require("../services/ServiceListGroup");
var _ServiceUpdateGroup = require("../services/ServiceUpdateGroup");
class GroupController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListGroup = new _ServiceListGroup.ServiceListGroup();
    const group = await serviceListGroup.execute({
      page,
      limit,
      ref
    });
    return response.json(group);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindGroup = new _ServiceFindGroup.ServiceFindGroup();
    const group = await serviceFindGroup.execute({
      id
    });
    return response.json(group);
  }
  async create(request, response) {
    const {
      name,
      type,
      mail,
      dn,
      sid,
      sync
    } = request.body;
    const serviceCreateGroup = new _ServiceCreateGroup.ServiceCreateGroup();
    const group = await serviceCreateGroup.execute({
      name,
      type,
      mail,
      dn,
      sid,
      sync
    });
    return response.json(group);
  }
  async update(request, response) {
    const {
      name,
      type,
      mail,
      dn,
      sid,
      sync
    } = request.body;
    const {
      id
    } = request.params;
    const serviceUpdateGroup = new _ServiceUpdateGroup.ServiceUpdateGroup();
    const group = await serviceUpdateGroup.execute({
      id,
      name,
      type,
      mail,
      dn,
      sid,
      sync
    });
    return response.json(group);
  }
  async delete(request, response) {
    // #swagger.tags = ['Profile']
    const {
      id
    } = request.params;
    const serviceDeleteGroup = new _ServiceDeleteGroup.ServiceDeleteGroup();
    const deleted = await serviceDeleteGroup.execute({
      id
    });
    return response.json(deleted);
  }
}
exports.default = GroupController;
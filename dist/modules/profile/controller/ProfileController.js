"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateProfile = require("../services/ServiceCreateProfile");
var _ServiceDeleteProfile = require("../services/ServiceDeleteProfile");
var _ServiceFindProfile = require("../services/ServiceFindProfile");
var _ServiceListProfile = require("../services/ServiceListProfile");
var _ServiceUpdateProfile = require("../services/ServiceUpdateProfile");
class ProfileController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const search = request.query.search ? String(request.query.search) : undefined;
    const serviceListProfile = new _ServiceListProfile.ServiceListProfile();
    const profile = await serviceListProfile.execute({
      page,
      limit,
      ref,
      search
    });
    return response.json(profile);
  }
  async find(request, response) {
    // #swagger.tags = ['Status']
    const {
      id
    } = request.params;
    const serviceFindProfile = new _ServiceFindProfile.ServiceFindProfile();
    const profile = await serviceFindProfile.execute({
      id
    });
    return response.json(profile);
  }
  async create(request, response) {
    // #swagger.tags = ['Status']
    const {
      name,
      obs
    } = request.body;
    const serviceCreateProfile = new _ServiceCreateProfile.ServiceCreateProfile();
    const result = await serviceCreateProfile.execute({
      name,
      obs
    });
    return response.json(result);
  }
  async update(request, response) {
    const {
      name,
      obs
    } = request.body;
    const {
      id
    } = request.params;
    const serviceUpdateProfile = new _ServiceUpdateProfile.ServiceUpdateProfile();
    const profile = await serviceUpdateProfile.execute({
      id,
      name,
      obs
    });
    return response.json(profile);
  }
  async delete(request, response) {
    // #swagger.tags = ['Profile']
    const {
      id
    } = request.params;
    const serviceDeleteProfile = new _ServiceDeleteProfile.ServiceDeleteProfile();
    const deleted = await serviceDeleteProfile.execute({
      id
    });
    return response.json(deleted);
  }
}
exports.default = ProfileController;
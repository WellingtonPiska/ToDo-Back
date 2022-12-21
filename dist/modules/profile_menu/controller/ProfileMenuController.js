"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateProfileMenu = require("../services/ServiceCreateProfileMenu");
var _ServiceDeleteProfileMenu = require("../services/ServiceDeleteProfileMenu");
var _ServiceFindProfileMenu = require("../services/ServiceFindProfileMenu");
var _ServiceListProfileMenu = require("../services/ServiceListProfileMenu");
var _ServiceUpdateProfileMenu = require("../services/ServiceUpdateProfileMenu");
class UserController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const serviceListProfileMenu = new _ServiceListProfileMenu.ServiceListProfileMenu();
    const ucc = await serviceListProfileMenu.execute({
      page,
      limit
    });
    return response.json(ucc);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindProfileMenu = new _ServiceFindProfileMenu.ServiceFindProfileMenu();
    const profileMenu = await serviceFindProfileMenu.execute({
      id
    });
    return response.json(profileMenu);
  }
  async create(request, response) {
    const {
      menu,
      profile
    } = request.body;
    const serviceCreateProfileMenu = new _ServiceCreateProfileMenu.ServiceCreateProfileMenu();
    const result = await serviceCreateProfileMenu.execute({
      profile,
      menu
    });
    return response.json(result);
  }
  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      profile,
      menu
    } = request.body;
    const serviceUpdateProfileMenu = new _ServiceUpdateProfileMenu.ServiceUpdateProfileMenu();
    const data = await serviceUpdateProfileMenu.execute({
      id,
      profile,
      menu
    });
    return response.json(data);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteProfileMenu = new _ServiceDeleteProfileMenu.ServiceDeleteProfileMenu();
    const profileMenu = await serviceDeleteProfileMenu.execute({
      id
    });
    return response.json(profileMenu);
  }
}
exports.default = UserController;
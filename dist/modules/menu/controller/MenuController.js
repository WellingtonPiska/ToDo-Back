"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateMenu = require("../services/ServiceCreateMenu");
var _ServiceDeleteMenu = require("../services/ServiceDeleteMenu");
var _ServiceFindMenu = require("../services/ServiceFindMenu");
var _ServiceListMenu = require("../services/ServiceListMenu");
var _ServiceUpdateMenu = require("../services/ServiceUpdateMenu");
class MenuController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListMenu = new _ServiceListMenu.ServiceListMenu();
    const menu = await serviceListMenu.execute({
      page,
      limit,
      ref
    });
    return response.json(menu);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindMenu = new _ServiceFindMenu.ServiceFindMenu();
    const menu = await serviceFindMenu.execute({
      id
    });
    return response.json(menu);
  }
  async create(request, response) {
    const {
      name,
      menuFather,
      groupMenu,
      uri,
      icon,
      order
    } = request.body;
    const serviceCreateMenu = new _ServiceCreateMenu.ServiceCreateMenu();
    const result = await serviceCreateMenu.execute({
      name,
      order,
      icon,
      groupMenu,
      menuFather,
      uri
    });
    return response.json(result);
  }
  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      name,
      menuFather,
      groupMenu,
      icon,
      uri,
      order
    } = request.body;
    const serviceUpdateMenu = new _ServiceUpdateMenu.ServiceUpdateMenu();
    const data = await serviceUpdateMenu.execute({
      id,
      name,
      icon,
      uri,
      menuFather,
      groupMenu,
      order
    });
    return response.json(data);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteMenu = new _ServiceDeleteMenu.ServiceDeleteMenu();
    const menu = await serviceDeleteMenu.execute({
      id
    });
    return response.json(menu);
  }
}
exports.default = MenuController;
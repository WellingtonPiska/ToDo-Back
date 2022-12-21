"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceAvatarUser = require("../services/ServiceAvatarUser");
var _ServiceCreateUser = require("../services/ServiceCreateUser");
var _ServiceDeleteUser = require("../services/ServiceDeleteUser");
var _ServiceFindUser = require("../services/ServiceFindUser");
var _ServiceListUser = require("../services/ServiceListUser");
var _ServiceUpdateUser = require("../services/ServiceUpdateUser");
// import { ServiceCreateStatus } from '../services/ServiceCreateStatus';
// import { ServiceDeleteStatus } from '../services/ServiceDeleteStatus';
// import { ServiceFindStatus } from '../services/ServiceFindStatus';

// import { ServiceUpdateStatus } from '../services/ServiceUpdateStatus';

class UserController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListUser = new _ServiceListUser.ServiceListUser();
    const user = await serviceListUser.execute({
      page,
      limit,
      ref
    });
    return response.json(user);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const svcFind = new _ServiceFindUser.ServiceFindUser();
    const data = await svcFind.execute({
      id
    });
    return response.json(data);
  }
  async create(request, response) {
    const {
      name,
      lastName,
      display,
      login,
      password,
      cpf,
      mail,
      dn,
      sid,
      sector,
      profile,
      costCenter
    } = request.body;
    const serviceCreateUser = new _ServiceCreateUser.ServiceCreateUser();
    const result = await serviceCreateUser.execute({
      name,
      lastName,
      display,
      login,
      password,
      cpf,
      mail,
      dn,
      sid,
      sector,
      profile,
      costCenter
    });
    return response.json(result);
  }
  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      name,
      lastName,
      display,
      login,
      password,
      cpf,
      mail,
      dn,
      sid,
      sector,
      profile,
      costCenter
    } = request.body;
    const serviceUpdateUser = new _ServiceUpdateUser.ServiceUpdateUser();
    const data = await serviceUpdateUser.execute({
      id,
      name,
      lastName,
      display,
      login,
      password,
      cpf,
      mail,
      dn,
      sid,
      sector,
      profile,
      costCenter
    });
    return response.json(data);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteUser = new _ServiceDeleteUser.ServiceDeleteUser();
    const data = await serviceDeleteUser.execute({
      id
    });
    return response.json(data);
  }
  async avatar(request, response) {
    const {
      id
    } = request.params;
    const {
      file
    } = request;
    if (!file) {
      throw new Error('Envie a imagem');
    }
    const servicePutAvatar = new _ServiceAvatarUser.ServicePutAvatar();
    const data = await servicePutAvatar.execute({
      id,
      avatar: file?.filename
    });
    return response.json(data);
  }
}
exports.default = UserController;
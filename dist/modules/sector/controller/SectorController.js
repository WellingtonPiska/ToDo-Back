"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceCreateSector = require("../services/ServiceCreateSector");
var _ServiceDeleteSector = require("../services/ServiceDeleteSector");
var _ServiceFindSector = require("../services/ServiceFindSector");
var _ServiceListSector = require("../services/ServiceListSector");
var _ServiceUpdateSector = require("../services/ServiceUpdateSector");
class SectorController {
  async list(request, response) {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';
    const serviceListSector = new _ServiceListSector.ServiceListSector();
    const sector = await serviceListSector.execute({
      page,
      limit,
      ref
    });
    return response.json(sector);
  }
  async find(request, response) {
    const {
      id
    } = request.params;
    const serviceFindPlace = new _ServiceFindSector.ServiceFindSector();
    const place = await serviceFindPlace.execute({
      id
    });
    return response.json(place);
  }
  async create(request, response) {
    const {
      name,
      type,
      dn,
      guid,
      obs,
      sectorFather,
      costCenter
    } = request.body;
    const serviceCreatePlace = new _ServiceCreateSector.ServiceCreateSector();
    const result = await serviceCreatePlace.execute({
      name,
      type,
      obs,
      dn,
      guid,
      sectorFather,
      costCenter
    });
    return response.json(result);
  }
  async delete(request, response) {
    const {
      id
    } = request.params;
    const serviceDeleteSector = new _ServiceDeleteSector.ServiceDeleteSector();
    const deleted = await serviceDeleteSector.execute({
      id
    });
    return response.json(deleted);
  }
  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      name,
      type,
      dn,
      guid,
      obs,
      sectorFather,
      costCenter
    } = request.body;
    const serviceUpdateSector = new _ServiceUpdateSector.ServiceUpdateSector();
    const data = await serviceUpdateSector.execute({
      id,
      name,
      type,
      obs,
      dn,
      guid,
      sectorFather,
      costCenter
    });
    return response.json(data);
  }
}
exports.default = SectorController;
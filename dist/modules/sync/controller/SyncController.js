"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ServiceSyncLocation = require("../services/ServiceSyncLocation");
var _ServiceSyncSector = require("../services/ServiceSyncSector");
var _ServiceSyncUser = require("../services/ServiceSyncUser");
class SyncController {
  async location(request, response) {
    const svcSyncLocation = new _ServiceSyncLocation.ServiceSyncLocation();
    const data = await svcSyncLocation.execute();
    return response.json(data);
  }
  async sector(request, response) {
    const svcSyncSector = new _ServiceSyncSector.ServiceSyncSector();
    const data = await svcSyncSector.execute();
    return response.json(data);
  }
  async user(request, response) {
    const svcSyncUser = new _ServiceSyncUser.ServiceSyncUser();
    const data = await svcSyncUser.execute();
    return response.json(data);
  }
}
exports.default = SyncController;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _SyncController = _interopRequireDefault(require("../controller/SyncController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerSync = new _SyncController.default();
const routerSync = (0, _express.Router)();
routerSync.get('/location', controllerSync.location);
routerSync.get('/sector', controllerSync.sector);
routerSync.get('/user', controllerSync.user);
var _default = routerSync;
exports.default = _default;
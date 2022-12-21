"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _PopulateController = _interopRequireDefault(require("../controller/PopulateController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerPopulate = new _PopulateController.default();
const routerPopulate = (0, _express.Router)();
routerPopulate.get('/', controllerPopulate.populate);
var _default = routerPopulate;
exports.default = _default;
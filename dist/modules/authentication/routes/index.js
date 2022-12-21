"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _AuthenticationController = _interopRequireDefault(require("../controller/AuthenticationController"));
var _schemaValidationLogin = _interopRequireDefault(require("../validation/schemaValidationLogin"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerAuth = new _AuthenticationController.default();
const routerAuth = (0, _express.Router)();
routerAuth.post('/login', (0, _validationRequest.default)(_schemaValidationLogin.default), controllerAuth.login);
var _default = routerAuth;
exports.default = _default;
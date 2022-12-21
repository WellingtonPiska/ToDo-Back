"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _CityController = _interopRequireDefault(require("../controller/CityController"));
var _StateController = _interopRequireDefault(require("../controller/StateController"));
var _ZipCodeController = _interopRequireDefault(require("../controller/ZipCodeController"));
var _schemaValidationState = _interopRequireDefault(require("../validation/schemaValidationState"));
var _schemaValidationZipCode = _interopRequireDefault(require("../validation/schemaValidationZipCode"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerState = new _StateController.default();
const controllerCity = new _CityController.default();
const controllerZipCode = new _ZipCodeController.default();
const routerLocation = (0, _express.Router)();
routerLocation.get('/state', controllerState.list);
routerLocation.get('/state/:uf', (0, _validationRequest.default)(_schemaValidationState.default), controllerState.find);
routerLocation.get('/city/:uf', (0, _validationRequest.default)(_schemaValidationState.default), controllerCity.list);
routerLocation.get('/zipcode/:cep', (0, _validationRequest.default)(_schemaValidationZipCode.default), controllerZipCode.find);
var _default = routerLocation;
exports.default = _default;
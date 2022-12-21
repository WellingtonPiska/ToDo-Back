"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _DeviceTypeController = _interopRequireDefault(require("../controller/DeviceTypeController"));
var _schemaValidationCreate = _interopRequireDefault(require("../validation/schemaValidationCreate"));
var _schemaValidationDelete = _interopRequireDefault(require("../validation/schemaValidationDelete"));
var _schemaValidationFind = _interopRequireDefault(require("../validation/schemaValidationFind"));
var _schemaValidationUpdate = _interopRequireDefault(require("../validation/schemaValidationUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerDeviceType = new _DeviceTypeController.default();
const routerDeviceType = (0, _express.Router)();
routerDeviceType.get('/', controllerDeviceType.list);
routerDeviceType.get('/:id', (0, _validationRequest.default)(_schemaValidationFind.default), controllerDeviceType.find);
routerDeviceType.post('/', (0, _validationRequest.default)(_schemaValidationCreate.default), controllerDeviceType.create);
routerDeviceType.put('/:id', (0, _validationRequest.default)(_schemaValidationUpdate.default), controllerDeviceType.update);
routerDeviceType.delete('/:id', (0, _validationRequest.default)(_schemaValidationDelete.default), controllerDeviceType.delete);
var _default = routerDeviceType;
exports.default = _default;
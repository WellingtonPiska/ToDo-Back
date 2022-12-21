"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _MenuRoutesController = _interopRequireDefault(require("../controller/MenuRoutesController"));
var _schemaValidationCreate = _interopRequireDefault(require("../validation/schemaValidationCreate"));
var _schemaValidationDelete = _interopRequireDefault(require("../validation/schemaValidationDelete"));
var _schemaValidationFind = _interopRequireDefault(require("../validation/schemaValidationFind"));
var _schemaValidationUpdate = _interopRequireDefault(require("../validation/schemaValidationUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerMenuRoutes = new _MenuRoutesController.default();
const routerMenuRoutes = (0, _express.Router)();
routerMenuRoutes.get('/', controllerMenuRoutes.list);
routerMenuRoutes.get('/:id', (0, _validationRequest.default)(_schemaValidationFind.default), controllerMenuRoutes.find);
routerMenuRoutes.post('/', (0, _validationRequest.default)(_schemaValidationCreate.default), controllerMenuRoutes.create);
routerMenuRoutes.put('/:id', (0, _validationRequest.default)(_schemaValidationUpdate.default), controllerMenuRoutes.update);
routerMenuRoutes.delete('/:id', (0, _validationRequest.default)(_schemaValidationDelete.default), controllerMenuRoutes.delete);
var _default = routerMenuRoutes;
exports.default = _default;
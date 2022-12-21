"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _RoutesController = _interopRequireDefault(require("../controller/RoutesController"));
var _schemaValidationCreate = _interopRequireDefault(require("../validation/schemaValidationCreate"));
var _schemaValidationDelete = _interopRequireDefault(require("../validation/schemaValidationDelete"));
var _schemaValidationFind = _interopRequireDefault(require("../validation/schemaValidationFind"));
var _schemaValidationUpdate = _interopRequireDefault(require("../validation/schemaValidationUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerRoutes = new _RoutesController.default();
const routerRoutes = (0, _express.Router)();
routerRoutes.get('/', controllerRoutes.list);
routerRoutes.get('/:id', (0, _validationRequest.default)(_schemaValidationFind.default), controllerRoutes.find);
routerRoutes.post('/', (0, _validationRequest.default)(_schemaValidationCreate.default), controllerRoutes.create);
routerRoutes.put('/:id', (0, _validationRequest.default)(_schemaValidationUpdate.default), controllerRoutes.update);
routerRoutes.delete('/:id', (0, _validationRequest.default)(_schemaValidationDelete.default), controllerRoutes.delete);
var _default = routerRoutes;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _GroupController = _interopRequireDefault(require("../controller/GroupController"));
var _schemaValidationCreate = _interopRequireDefault(require("../validation/schemaValidationCreate"));
var _schemaValidationDelete = _interopRequireDefault(require("../validation/schemaValidationDelete"));
var _schemaValidationFind = _interopRequireDefault(require("../validation/schemaValidationFind"));
var _schemaValidationUpdate = _interopRequireDefault(require("../validation/schemaValidationUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerGroup = new _GroupController.default();
const routerGroup = (0, _express.Router)();
routerGroup.get('/', controllerGroup.list);
routerGroup.get('/:id', (0, _validationRequest.default)(_schemaValidationFind.default), controllerGroup.find);
routerGroup.post('/', (0, _validationRequest.default)(_schemaValidationCreate.default), controllerGroup.create);
routerGroup.put('/:id', (0, _validationRequest.default)(_schemaValidationUpdate.default), controllerGroup.update);
routerGroup.delete('/:id', (0, _validationRequest.default)(_schemaValidationDelete.default), controllerGroup.delete);
var _default = routerGroup;
exports.default = _default;
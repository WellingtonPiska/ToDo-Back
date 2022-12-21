"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _MenuController = _interopRequireDefault(require("../controller/MenuController"));
var _schemaValidationCreate = _interopRequireDefault(require("../validation/schemaValidationCreate"));
var _schemaValidationDelete = _interopRequireDefault(require("../validation/schemaValidationDelete"));
var _schemaValidationFind = _interopRequireDefault(require("../validation/schemaValidationFind"));
var _schemaValidationUpdate = _interopRequireDefault(require("../validation/schemaValidationUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerMenu = new _MenuController.default();
const routerMenu = (0, _express.Router)();
routerMenu.get('/', controllerMenu.list);
routerMenu.get('/:id', (0, _validationRequest.default)(_schemaValidationFind.default), controllerMenu.find);
routerMenu.post('/', (0, _validationRequest.default)(_schemaValidationCreate.default), controllerMenu.create);
routerMenu.put('/:id', (0, _validationRequest.default)(_schemaValidationUpdate.default), controllerMenu.update);
routerMenu.delete('/:id', (0, _validationRequest.default)(_schemaValidationDelete.default), controllerMenu.delete);
var _default = routerMenu;
exports.default = _default;
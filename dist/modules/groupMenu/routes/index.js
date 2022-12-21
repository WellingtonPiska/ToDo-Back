"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _GroupMenuController = _interopRequireDefault(require("../controller/GroupMenuController"));
var _schemaValidationCreate = _interopRequireDefault(require("../validation/schemaValidationCreate"));
var _schemaValidationDelete = _interopRequireDefault(require("../validation/schemaValidationDelete"));
var _schemaValidationFind = _interopRequireDefault(require("../validation/schemaValidationFind"));
var _schemaValidationUpdate = _interopRequireDefault(require("../validation/schemaValidationUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerGroupMenu = new _GroupMenuController.default();
const routerGroupMenu = (0, _express.Router)();
routerGroupMenu.get('/', controllerGroupMenu.list);
routerGroupMenu.get('/:id', (0, _validationRequest.default)(_schemaValidationFind.default), controllerGroupMenu.find);
routerGroupMenu.post('/', (0, _validationRequest.default)(_schemaValidationCreate.default), controllerGroupMenu.create);
routerGroupMenu.put('/:id', (0, _validationRequest.default)(_schemaValidationUpdate.default), controllerGroupMenu.update);
routerGroupMenu.delete('/:id', (0, _validationRequest.default)(_schemaValidationDelete.default), controllerGroupMenu.delete);
var _default = routerGroupMenu;
exports.default = _default;
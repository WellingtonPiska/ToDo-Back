"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _ProfileMenuController = _interopRequireDefault(require("../controller/ProfileMenuController"));
var _schemaValidationCreate = _interopRequireDefault(require("../validation/schemaValidationCreate"));
var _schemaValidationDelete = _interopRequireDefault(require("../validation/schemaValidationDelete"));
var _schemaValidationFind = _interopRequireDefault(require("../validation/schemaValidationFind"));
var _schemaValidationUpdate = _interopRequireDefault(require("../validation/schemaValidationUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerProfileMenu = new _ProfileMenuController.default();
const routerProfileMenu = (0, _express.Router)();
routerProfileMenu.get('/', controllerProfileMenu.list);
routerProfileMenu.get('/:id', (0, _validationRequest.default)(_schemaValidationFind.default), controllerProfileMenu.find);
routerProfileMenu.post('/', (0, _validationRequest.default)(_schemaValidationCreate.default), controllerProfileMenu.create);
routerProfileMenu.put('/:id', (0, _validationRequest.default)(_schemaValidationUpdate.default), controllerProfileMenu.update);
routerProfileMenu.delete('/:id', (0, _validationRequest.default)(_schemaValidationDelete.default), controllerProfileMenu.delete);
var _default = routerProfileMenu;
exports.default = _default;
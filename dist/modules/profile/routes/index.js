"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _ProfileController = _interopRequireDefault(require("../controller/ProfileController"));
var _schemaValidationCreate = _interopRequireDefault(require("../validation/schemaValidationCreate"));
var _schemaValidationDelete = _interopRequireDefault(require("../validation/schemaValidationDelete"));
var _schemaValidationFind = _interopRequireDefault(require("../validation/schemaValidationFind"));
var _schemaValidationUpdate = _interopRequireDefault(require("../validation/schemaValidationUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerProfile = new _ProfileController.default();
const routerProfile = (0, _express.Router)();
routerProfile.get('/', controllerProfile.list);
routerProfile.get('/:id', (0, _validationRequest.default)(_schemaValidationFind.default), controllerProfile.find);
routerProfile.post('/', (0, _validationRequest.default)(_schemaValidationCreate.default), controllerProfile.create);
routerProfile.put('/:id', (0, _validationRequest.default)(_schemaValidationUpdate.default), controllerProfile.update);
routerProfile.delete('/:id', (0, _validationRequest.default)(_schemaValidationDelete.default), controllerProfile.delete);
var _default = routerProfile;
exports.default = _default;
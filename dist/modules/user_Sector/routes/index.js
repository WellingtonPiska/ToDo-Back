"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _UserSectorController = _interopRequireDefault(require("../controller/UserSectorController"));
var _schemaValidationUserSectorCreate = _interopRequireDefault(require("../validation/schemaValidationUserSectorCreate"));
var _schemaValidationUserSectorDelete = _interopRequireDefault(require("../validation/schemaValidationUserSectorDelete"));
var _schemaValidationUserSectorFind = _interopRequireDefault(require("../validation/schemaValidationUserSectorFind"));
var _schemaValidationUserSectorUpdate = _interopRequireDefault(require("../validation/schemaValidationUserSectorUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerUserSector = new _UserSectorController.default();
const routerUserSector = (0, _express.Router)();
routerUserSector.get('/', controllerUserSector.list);
routerUserSector.get('/:id', (0, _validationRequest.default)(_schemaValidationUserSectorFind.default), controllerUserSector.find);
routerUserSector.post('/', (0, _validationRequest.default)(_schemaValidationUserSectorCreate.default), controllerUserSector.create);
routerUserSector.put('/:id', (0, _validationRequest.default)(_schemaValidationUserSectorUpdate.default), controllerUserSector.update);
routerUserSector.delete('/:id', (0, _validationRequest.default)(_schemaValidationUserSectorDelete.default), controllerUserSector.delete);
var _default = routerUserSector;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _StatusController = _interopRequireDefault(require("../controller/StatusController"));
var _schemaValidationStatusCreate = _interopRequireDefault(require("../validation/schemaValidationStatusCreate"));
var _schemaValidationStatusDelete = _interopRequireDefault(require("../validation/schemaValidationStatusDelete"));
var _schemaValidationStatusFind = _interopRequireDefault(require("../validation/schemaValidationStatusFind"));
var _schemaValidationStatusUpdate = _interopRequireDefault(require("../validation/schemaValidationStatusUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerStatus = new _StatusController.default();
const routerStatus = (0, _express.Router)();
routerStatus.get('/:id', (0, _validationRequest.default)(_schemaValidationStatusFind.default), controllerStatus.find);
routerStatus.get('/', controllerStatus.list);
routerStatus.post('/', (0, _validationRequest.default)(_schemaValidationStatusCreate.default), controllerStatus.create);
routerStatus.put('/:id', (0, _validationRequest.default)(_schemaValidationStatusUpdate.default), controllerStatus.update);
routerStatus.delete('/:id', (0, _validationRequest.default)(_schemaValidationStatusDelete.default), controllerStatus.delete);
var _default = routerStatus;
exports.default = _default;
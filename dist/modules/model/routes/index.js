"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _ModelController = _interopRequireDefault(require("../controller/ModelController"));
var _schemaValidationCreate = _interopRequireDefault(require("../validation/schemaValidationCreate"));
var _schemaValidationDelete = _interopRequireDefault(require("../validation/schemaValidationDelete"));
var _schemaValidationFind = _interopRequireDefault(require("../validation/schemaValidationFind"));
var _schemaValidationUpdate = _interopRequireDefault(require("../validation/schemaValidationUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerModel = new _ModelController.default();
const routerModel = (0, _express.Router)();
routerModel.get('/', controllerModel.list);
routerModel.get('/:id', (0, _validationRequest.default)(_schemaValidationFind.default), controllerModel.find);
routerModel.post('/', (0, _validationRequest.default)(_schemaValidationCreate.default), controllerModel.create);
routerModel.put('/:id', (0, _validationRequest.default)(_schemaValidationUpdate.default), controllerModel.update);
routerModel.delete('/:id', (0, _validationRequest.default)(_schemaValidationDelete.default), controllerModel.delete);
var _default = routerModel;
exports.default = _default;
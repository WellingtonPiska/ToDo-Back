"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _CostCenterController = _interopRequireDefault(require("../controller/CostCenterController"));
var _schemaValidationCreate = _interopRequireDefault(require("../validation/schemaValidationCreate"));
var _schemaValidationDelete = _interopRequireDefault(require("../validation/schemaValidationDelete"));
var _schemaValidationFind = _interopRequireDefault(require("../validation/schemaValidationFind"));
var _schemaValidationUpdate = _interopRequireDefault(require("../validation/schemaValidationUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerCostCenter = new _CostCenterController.default();
const routerCostCenter = (0, _express.Router)();
routerCostCenter.get('/', controllerCostCenter.list);
routerCostCenter.get('/:id', (0, _validationRequest.default)(_schemaValidationFind.default), controllerCostCenter.find);
routerCostCenter.post('/', (0, _validationRequest.default)(_schemaValidationCreate.default), controllerCostCenter.create);
routerCostCenter.put('/:id', (0, _validationRequest.default)(_schemaValidationUpdate.default), controllerCostCenter.update);
routerCostCenter.delete('/:id', (0, _validationRequest.default)(_schemaValidationDelete.default), controllerCostCenter.delete);
var _default = routerCostCenter;
exports.default = _default;
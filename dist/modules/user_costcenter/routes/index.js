"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _UserCostCenterController = _interopRequireDefault(require("../controller/UserCostCenterController"));
var _schemaValidationUserCostCenterCreate = _interopRequireDefault(require("../validation/schemaValidationUserCostCenterCreate"));
var _schemaValidationUserCostCenterDelete = _interopRequireDefault(require("../validation/schemaValidationUserCostCenterDelete"));
var _schemaValidationUserCostCenterFind = _interopRequireDefault(require("../validation/schemaValidationUserCostCenterFind"));
var _schemaValidationUserCostCenterUpdate = _interopRequireDefault(require("../validation/schemaValidationUserCostCenterUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerUserCostCenter = new _UserCostCenterController.default();
const routerUserCostCenter = (0, _express.Router)();
routerUserCostCenter.get('/', controllerUserCostCenter.list);
routerUserCostCenter.get('/:id', (0, _validationRequest.default)(_schemaValidationUserCostCenterFind.default), controllerUserCostCenter.find);
routerUserCostCenter.post('/', (0, _validationRequest.default)(_schemaValidationUserCostCenterCreate.default), controllerUserCostCenter.create);
routerUserCostCenter.put('/:id', (0, _validationRequest.default)(_schemaValidationUserCostCenterUpdate.default), controllerUserCostCenter.update);
routerUserCostCenter.delete('/:id', (0, _validationRequest.default)(_schemaValidationUserCostCenterDelete.default), controllerUserCostCenter.delete);
var _default = routerUserCostCenter;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _ApportionController = _interopRequireDefault(require("../controller/ApportionController"));
var _schemaValidationCreate = _interopRequireDefault(require("../validation/schemaValidationCreate"));
var _schemaValidationDelete = _interopRequireDefault(require("../validation/schemaValidationDelete"));
var _schemaValidationFind = _interopRequireDefault(require("../validation/schemaValidationFind"));
var _schemaValidationUpdate = _interopRequireDefault(require("../validation/schemaValidationUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerApportion = new _ApportionController.default();
const routerApportion = (0, _express.Router)();
routerApportion.get('/', controllerApportion.list);
routerApportion.get('/:id', (0, _validationRequest.default)(_schemaValidationFind.default), controllerApportion.find);
routerApportion.post('/', (0, _validationRequest.default)(_schemaValidationCreate.default), controllerApportion.create);
routerApportion.put('/:id', (0, _validationRequest.default)(_schemaValidationUpdate.default), controllerApportion.update);
routerApportion.delete('/:id', (0, _validationRequest.default)(_schemaValidationDelete.default), controllerApportion.delete);
var _default = routerApportion;
exports.default = _default;
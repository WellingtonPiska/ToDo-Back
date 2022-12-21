"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _CompanyController = _interopRequireDefault(require("../controller/CompanyController"));
var _schemaValidationCreate = _interopRequireDefault(require("../validation/schemaValidationCreate"));
var _schemaValidationDelete = _interopRequireDefault(require("../validation/schemaValidationDelete"));
var _schemaValidationFind = _interopRequireDefault(require("../validation/schemaValidationFind"));
var _schemaValidationUpdate = _interopRequireDefault(require("../validation/schemaValidationUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerCompany = new _CompanyController.default();
const routerCompany = (0, _express.Router)();
routerCompany.get('/', controllerCompany.list);
routerCompany.get('/:id', (0, _validationRequest.default)(_schemaValidationFind.default), controllerCompany.find);
routerCompany.post('/', (0, _validationRequest.default)(_schemaValidationCreate.default), controllerCompany.create);
routerCompany.put('/:id', (0, _validationRequest.default)(_schemaValidationUpdate.default), controllerCompany.update);
routerCompany.delete('/:id', (0, _validationRequest.default)(_schemaValidationDelete.default), controllerCompany.delete);
var _default = routerCompany;
exports.default = _default;
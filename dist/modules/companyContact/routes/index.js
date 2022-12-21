"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _CompanyContactController = _interopRequireDefault(require("../controller/CompanyContactController"));
var _schemaValidationContactList = _interopRequireDefault(require("../validation/schemaValidationContactList"));
var _schemaValidationCreateContact = _interopRequireDefault(require("../validation/schemaValidationCreateContact"));
var _schemaValidationDeleteContact = _interopRequireDefault(require("../validation/schemaValidationDeleteContact"));
var _schemaValidationFindContact = _interopRequireDefault(require("../validation/schemaValidationFindContact"));
var _schemaValidationUpdateContact = _interopRequireDefault(require("../validation/schemaValidationUpdateContact"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerCompanyContact = new _CompanyContactController.default();
const routerCompanyContact = (0, _express.Router)();
routerCompanyContact.get('/:company/contact', (0, _validationRequest.default)(_schemaValidationContactList.default), controllerCompanyContact.list);
routerCompanyContact.get('/:company/contact/:id', (0, _validationRequest.default)(_schemaValidationFindContact.default), controllerCompanyContact.find);
routerCompanyContact.post('/:company/contact/', (0, _validationRequest.default)(_schemaValidationCreateContact.default), controllerCompanyContact.create);
routerCompanyContact.delete('/:company/contact/:id', (0, _validationRequest.default)(_schemaValidationDeleteContact.default), controllerCompanyContact.delete);
routerCompanyContact.put('/:company/contact/:id', (0, _validationRequest.default)(_schemaValidationUpdateContact.default), controllerCompanyContact.update);
var _default = routerCompanyContact;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _uploadAvatar = require("../../../config/uploadAvatar");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _UserController = _interopRequireDefault(require("../controller/UserController"));
var _schemaValidationAvatar = _interopRequireDefault(require("../validation/schemaValidationAvatar"));
var _schemaValidationUserCreate = _interopRequireDefault(require("../validation/schemaValidationUserCreate"));
var _schemaValidationUserDelete = _interopRequireDefault(require("../validation/schemaValidationUserDelete"));
var _schemaValidationUserFind = _interopRequireDefault(require("../validation/schemaValidationUserFind"));
var _schemaValidationUserUpdate = _interopRequireDefault(require("../validation/schemaValidationUserUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const controllerUser = new _UserController.default();
const routerUser = (0, _express.Router)();
routerUser.put('/avatar/:id', _uploadAvatar.uploadAvatar.single('file'), (0, _validationRequest.default)(_schemaValidationAvatar.default), controllerUser.avatar);
routerUser.get('/', controllerUser.list);
routerUser.get('/:id', (0, _validationRequest.default)(_schemaValidationUserFind.default), controllerUser.find);
routerUser.post('/', (0, _validationRequest.default)(_schemaValidationUserCreate.default), controllerUser.create);
routerUser.put('/:id', (0, _validationRequest.default)(_schemaValidationUserUpdate.default), controllerUser.update);
routerUser.delete('/:id', (0, _validationRequest.default)(_schemaValidationUserDelete.default), controllerUser.delete);
var _default = routerUser;
exports.default = _default;
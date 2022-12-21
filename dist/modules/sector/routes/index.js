"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _validationRequest = _interopRequireDefault(require("../../../shared/middleware/validationRequest"));
var _SectorController = _interopRequireDefault(require("../controller/SectorController"));
var _schemaValidationCreate = _interopRequireDefault(require("../validation/schemaValidationCreate"));
var _schemaValidationDelete = _interopRequireDefault(require("../validation/schemaValidationDelete"));
var _schemaValidationFind = _interopRequireDefault(require("../validation/schemaValidationFind"));
var _schemaValidationUpdate = _interopRequireDefault(require("../validation/schemaValidationUpdate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const placeController = new _SectorController.default();
const routerPlace = (0, _express.Router)();
routerPlace.get('/', placeController.list);
routerPlace.get('/:id', (0, _validationRequest.default)(_schemaValidationFind.default), placeController.find);
routerPlace.post('/', (0, _validationRequest.default)(_schemaValidationCreate.default), placeController.create);
routerPlace.delete('/:id', (0, _validationRequest.default)(_schemaValidationDelete.default), placeController.delete);
routerPlace.put('/:id', (0, _validationRequest.default)(_schemaValidationUpdate.default), placeController.update);
var _default = routerPlace;
exports.default = _default;
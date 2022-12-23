"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _logRequest = _interopRequireDefault(require("../middleware/logRequest"));
var _routes = _interopRequireDefault(require("../../modules/_populate/routes"));
var _routes2 = _interopRequireDefault(require("../../modules/apportion/routes"));
var _routes3 = _interopRequireDefault(require("../../modules/authentication/routes"));
var _routes4 = _interopRequireDefault(require("../../modules/company/routes"));
var _routes5 = _interopRequireDefault(require("../../modules/companyContact/routes"));
var _routes6 = _interopRequireDefault(require("../../modules/contactType/routes"));
var _routes7 = _interopRequireDefault(require("../../modules/costCenter/routes"));
var _routes8 = _interopRequireDefault(require("../../modules/deviceType/routes"));
var _routes9 = _interopRequireDefault(require("../../modules/group/routes"));
var _routes10 = _interopRequireDefault(require("../../modules/groupMenu/routes"));
var _routes11 = _interopRequireDefault(require("../../modules/location/routes"));
var _routes12 = _interopRequireDefault(require("../../modules/menu/routes"));
var _routes13 = _interopRequireDefault(require("../../modules/menuRoutes/routes"));
var _routes14 = _interopRequireDefault(require("../../modules/model/routes"));
var _routes15 = require("../../modules/multerTest/routes");
var _routes16 = _interopRequireDefault(require("../../modules/profile_menu/routes"));
var _routes17 = _interopRequireDefault(require("../../modules/profile/routes"));
var _routes18 = _interopRequireDefault(require("../../modules/routes/routes"));
var _routes19 = _interopRequireDefault(require("../../modules/sector/routes"));
var _routes20 = _interopRequireDefault(require("../../modules/status/routes"));
var _routes21 = _interopRequireDefault(require("../../modules/sync/routes"));
var _routes22 = _interopRequireDefault(require("../../modules/user_costcenter/routes"));
var _routes23 = _interopRequireDefault(require("../../modules/user_Sector/routes"));
var _routes24 = _interopRequireDefault(require("../../modules/user/routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const routes = (0, _express.Router)();
routes.use('/auth', _routes3.default);
routes.use('/populate', _routes.default);
routes.use('/location', _routes11.default);
routes.use('/sync', _routes21.default);
routes.use('/status', _logRequest.default, _routes20.default);
routes.use('/profile', _routes17.default);
routes.use('/costCenter', _routes7.default);
routes.use('/userCostCenter', _routes22.default);
routes.use('/sector', _routes19.default);
routes.use('/userSector', _routes23.default);
routes.use('/user', _routes24.default);
routes.use('/apportion', _routes2.default);
routes.use('/group', _routes9.default);
routes.use('/menu', _routes12.default);
routes.use('/contactType', _routes6.default);
routes.use('/company', _routes4.default);
routes.use('/company', _routes5.default);
routes.use('/deviceType', _routes8.default);
routes.use('/model', _routes14.default);
routes.use('/multer', _routes15.routerMulter);
routes.use('/routes', _routes18.default);
routes.use('/groupMenu', _routes10.default);
routes.use('/menu', _routes12.default);
routes.use('/menuRoutes', _routes13.default);
routes.use('/profileMenu', _routes16.default);
var _default = routes;
exports.default = _default;
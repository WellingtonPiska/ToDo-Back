"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routerMulter = void 0;
var _express = require("express");
var _multer = _interopRequireDefault(require("multer"));
var _MulterController = _interopRequireDefault(require("../controller/MulterController"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const routerMulter = (0, _express.Router)();
exports.routerMulter = routerMulter;
const upload = (0, _multer.default)({
  dest: './tmp'
});
const multerController = new _MulterController.default();
routerMulter.post('/', multerController.import);
routerMulter.post('/import', upload.single('file'), (request, response) => {
  const {
    file
  } = request;
  console.log(file);
  return response.send();
});
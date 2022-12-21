"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadAvatar = void 0;
var _mimeTypes = _interopRequireDefault(require("mime-types"));
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const uploadAvatar = (0, _multer.default)({
  storage: _multer.default.diskStorage({
    destination(req, file, cb) {
      cb(null, './public/avatar/');
    },
    filename(req, file, cb) {
      const type = _mimeTypes.default.extension(file.mimetype);
      cb(null, `${new Date().getTime()}.${type}`);
    }
  }),
  fileFilter: (req, file, cb) => {
    cb(null, true);
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Image uploaded is not of type jpg/jpeg or png'));
    }
  }
});
exports.uploadAvatar = uploadAvatar;
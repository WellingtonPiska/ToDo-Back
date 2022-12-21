"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;
var _cors = _interopRequireDefault(require("cors"));
var _express = _interopRequireDefault(require("express"));
require("express-async-errors");
var _routes = _interopRequireDefault(require("./routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
exports.app = app;
app.use((0, _cors.default)());
app.use(_express.default.json());
app.use('/public', _express.default.static('public'));
app.use('/files', _express.default.static('tmp'));
app.use(_routes.default);
app.use(
// eslint-disable-next-line @typescript-eslint/no-unused-vars
(err, request, response, next) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message
    });
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const logRequest = (req, res, next) => {
  const log = {
    method: req.method,
    path: req.originalUrl,
    param: req.params,
    query: req.query,
    body: req.body,
    header: req.headers,
    ip: req.socket.remoteAddress
  };
  next();
};
var _default = logRequest;
exports.default = _default;
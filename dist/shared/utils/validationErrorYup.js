"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validationErrorYup;
function validationErrorYup(err) {
  const object = {};
  err.inner.forEach(x => {
    if (x.path !== undefined) {
      object[x.path] = x.errors;
    }
  });
  return object;
}
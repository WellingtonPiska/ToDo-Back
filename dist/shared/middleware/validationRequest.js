"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _validationErrorYup = _interopRequireDefault(require("../utils/validationErrorYup"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ensureValidationYupRequest = schema => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params
    }, {
      strict: true,
      abortEarly: false
    });
    next();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err) {
    const object = (0, _validationErrorYup.default)(err);
    res.status(400).json(object);
  }
};
var _default = ensureValidationYupRequest;
exports.default = _default;
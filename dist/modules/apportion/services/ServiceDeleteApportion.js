"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteApportion = void 0;
var _ApportionRepository = _interopRequireDefault(require("../repository/ApportionRepository"));
var _ServiceFindApportion = require("./ServiceFindApportion");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteApportion {
  async execute({
    id
  }) {
    const repo = new _ApportionRepository.default();
    const serviceFindApportion = new _ServiceFindApportion.ServiceFindApportion();
    const apportion = await serviceFindApportion.execute({
      id
    });
    await repo.remove(apportion);
    return true;
  }
}
exports.ServiceDeleteApportion = ServiceDeleteApportion;
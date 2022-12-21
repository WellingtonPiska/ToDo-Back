"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindApportion = void 0;
var _ApportionRepository = _interopRequireDefault(require("../repository/ApportionRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindApportion {
  async execute({
    id
  }) {
    const repo = new _ApportionRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('Apportion not found');
    }
    return data;
  }
}
exports.ServiceFindApportion = ServiceFindApportion;
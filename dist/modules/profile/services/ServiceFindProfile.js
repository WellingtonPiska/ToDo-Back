"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindProfile = void 0;
var _ProfileRepository = _interopRequireDefault(require("../repository/ProfileRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindProfile {
  async execute({
    id
  }) {
    const repo = new _ProfileRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('Profile not found');
    }
    return data;
  }
}
exports.ServiceFindProfile = ServiceFindProfile;
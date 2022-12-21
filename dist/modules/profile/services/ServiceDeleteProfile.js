"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteProfile = void 0;
var _ProfileRepository = _interopRequireDefault(require("../repository/ProfileRepository"));
var _ServiceFindProfile = require("./ServiceFindProfile");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteProfile {
  async execute({
    id
  }) {
    const repo = new _ProfileRepository.default();
    const serviceFindProfile = new _ServiceFindProfile.ServiceFindProfile();
    const profile = await serviceFindProfile.execute({
      id
    });
    await repo.remove(profile);
    return true;
  }
}
exports.ServiceDeleteProfile = ServiceDeleteProfile;
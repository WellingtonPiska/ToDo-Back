"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateProfile = void 0;
var _ProfileRepository = _interopRequireDefault(require("../repository/ProfileRepository"));
var _ServiceFindProfile = require("./ServiceFindProfile");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateProfile {
  async execute({
    id,
    name,
    obs
  }) {
    const repo = new _ProfileRepository.default();
    const serviceFindProfile = new _ServiceFindProfile.ServiceFindProfile();
    const profile = await serviceFindProfile.execute({
      id
    });
    const profileValid = await repo.findValidUpdate(id, name);
    if (profileValid) {
      throw new Error('Profile duplicado');
    }
    profile.name = name;
    profile.obs = obs;
    await repo.update(profile);
    return profile;
  }
}
exports.ServiceUpdateProfile = ServiceUpdateProfile;
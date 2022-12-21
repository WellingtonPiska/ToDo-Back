"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateProfile = void 0;
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _Profile = _interopRequireDefault(require("../entities/Profile"));
var _ProfileRepository = _interopRequireDefault(require("../repository/ProfileRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateProfile {
  async execute({
    name,
    obs
  }) {
    const repo = new _ProfileRepository.default();
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({
      ref: 'A'
    });
    const profileValid = await repo.findByName(name);
    if (profileValid) {
      throw new Error('Profile já existe');
    }
    const profile = new _Profile.default();
    profile.name = name;
    profile.obs = obs;
    profile.status = statusRef.id;
    const obj = await repo.create(profile);
    return obj;
  }
}
exports.ServiceCreateProfile = ServiceCreateProfile;
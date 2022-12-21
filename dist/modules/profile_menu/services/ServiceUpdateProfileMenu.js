"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateProfileMenu = void 0;
var _ServiceFindMenu = require("../../menu/services/ServiceFindMenu");
var _ServiceFindProfile = require("../../profile/services/ServiceFindProfile");
var _ProfileMenuRepository = _interopRequireDefault(require("../repository/ProfileMenuRepository"));
var _ServiceFindProfileMenu = require("./ServiceFindProfileMenu");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateProfileMenu {
  async execute({
    id,
    profile,
    menu
  }) {
    const repo = new _ProfileMenuRepository.default();
    const serviceFindProfileMenu = new _ServiceFindProfileMenu.ServiceFindProfileMenu();
    const profileMenu = await serviceFindProfileMenu.execute({
      id
    });
    const serviceFindMenu = new _ServiceFindMenu.ServiceFindMenu();
    const menuRef = await serviceFindMenu.execute({
      id: menu
    });
    const serviceFindProfile = new _ServiceFindProfile.ServiceFindProfile();
    const profileRef = await serviceFindProfile.execute({
      id: profile
    });
    const menuValid = await repo.findValidUpdate(id);
    if (menuValid) {
      throw new Error('Menu duplicado');
    }
    profileMenu.menu = menuRef.id;
    profileMenu.profile = profileRef.id;
    await repo.update(profileMenu);
    return profileMenu;
  }
}
exports.ServiceUpdateProfileMenu = ServiceUpdateProfileMenu;
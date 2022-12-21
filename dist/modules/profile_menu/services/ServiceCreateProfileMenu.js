"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateProfileMenu = void 0;
var _ServiceFindMenu = require("../../menu/services/ServiceFindMenu");
var _ServiceFindProfile = require("../../profile/services/ServiceFindProfile");
var _ProfileMenu = _interopRequireDefault(require("../entities/ProfileMenu"));
var _ProfileMenuRepository = _interopRequireDefault(require("../repository/ProfileMenuRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateProfileMenu {
  async execute({
    menu,
    profile
  }) {
    const repo = new _ProfileMenuRepository.default();
    const serviceFindMenu = new _ServiceFindMenu.ServiceFindMenu();
    const menuRef = await serviceFindMenu.execute({
      id: menu
    });
    const serviceFindProfile = new _ServiceFindProfile.ServiceFindProfile();
    const profileRef = await serviceFindProfile.execute({
      id: profile
    });
    const pme = new _ProfileMenu.default();
    pme.menu = menuRef.id;
    pme.profile = profileRef.id;
    const obj = await repo.create(pme);
    return obj;
  }
}
exports.ServiceCreateProfileMenu = ServiceCreateProfileMenu;
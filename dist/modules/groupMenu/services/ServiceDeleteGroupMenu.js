"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteGroupMenu = void 0;
var _GroupMenuRepository = _interopRequireDefault(require("../repository/GroupMenuRepository"));
var _ServiceFindGroupMenu = require("./ServiceFindGroupMenu");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteGroupMenu {
  async execute({
    id
  }) {
    const repo = new _GroupMenuRepository.default();
    const serviceFindGroupMenu = new _ServiceFindGroupMenu.ServiceFindGroupMenu();
    const profile = await serviceFindGroupMenu.execute({
      id
    });
    await repo.remove(profile);
    return true;
  }
}
exports.ServiceDeleteGroupMenu = ServiceDeleteGroupMenu;
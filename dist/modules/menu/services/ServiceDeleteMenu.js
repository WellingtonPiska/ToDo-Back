"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteMenu = void 0;
var _MenuRepository = _interopRequireDefault(require("../repository/MenuRepository"));
var _ServiceFindMenu = require("./ServiceFindMenu");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteMenu {
  async execute({
    id
  }) {
    const repo = new _MenuRepository.default();
    const serviceFindMenu = new _ServiceFindMenu.ServiceFindMenu();
    const menu = await serviceFindMenu.execute({
      id
    });
    await repo.remove(menu);
    return true;
  }
}
exports.ServiceDeleteMenu = ServiceDeleteMenu;
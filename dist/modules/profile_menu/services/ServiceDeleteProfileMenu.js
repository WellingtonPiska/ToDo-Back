"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteProfileMenu = void 0;
require("reflect-metadata");
var _database = require("../../../shared/database");
var _ProfileMenu = _interopRequireDefault(require("../entities/ProfileMenu"));
var _ServiceFindProfileMenu = require("./ServiceFindProfileMenu");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteProfileMenu {
  async execute({
    id
  }) {
    const repo = _database.dataSource.getRepository(_ProfileMenu.default);
    const serviceFindProfileMenu = new _ServiceFindProfileMenu.ServiceFindProfileMenu();
    const pme = await serviceFindProfileMenu.execute({
      id
    });
    await repo.delete({
      id: pme.id
    });
    return true;
  }
}
exports.ServiceDeleteProfileMenu = ServiceDeleteProfileMenu;
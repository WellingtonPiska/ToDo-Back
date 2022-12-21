"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindProfileMenu = void 0;
var _ProfileMenuRepository = _interopRequireDefault(require("../repository/ProfileMenuRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindProfileMenu {
  async execute({
    id
  }) {
    const repo = new _ProfileMenuRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('ProfileMenu não encontrado');
    }
    return data;
  }
}
exports.ServiceFindProfileMenu = ServiceFindProfileMenu;
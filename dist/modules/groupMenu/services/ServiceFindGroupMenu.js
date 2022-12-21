"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindGroupMenu = void 0;
var _GroupMenuRepository = _interopRequireDefault(require("../repository/GroupMenuRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindGroupMenu {
  async execute({
    id
  }) {
    const repo = new _GroupMenuRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('GroupMenu não encontrado');
    }
    return data;
  }
}
exports.ServiceFindGroupMenu = ServiceFindGroupMenu;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceFindMenu = void 0;
var _MenuRepository = _interopRequireDefault(require("../repository/MenuRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceFindMenu {
  async execute({
    id
  }) {
    const repo = new _MenuRepository.default();
    const data = await repo.findById(id);
    if (!data) {
      throw new Error('Menu não encontrado');
    }
    return data;
  }
}
exports.ServiceFindMenu = ServiceFindMenu;
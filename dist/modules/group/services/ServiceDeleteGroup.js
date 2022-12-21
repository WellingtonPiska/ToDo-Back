"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceDeleteGroup = void 0;
var _GroupRepository = _interopRequireDefault(require("../repository/GroupRepository"));
var _ServiceFindGroup = require("./ServiceFindGroup");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceDeleteGroup {
  async execute({
    id
  }) {
    const repo = new _GroupRepository.default();
    const serviceFindGroup = new _ServiceFindGroup.ServiceFindGroup();
    const group = await serviceFindGroup.execute({
      id
    });
    await repo.remove(group);
    return true;
  }
}
exports.ServiceDeleteGroup = ServiceDeleteGroup;
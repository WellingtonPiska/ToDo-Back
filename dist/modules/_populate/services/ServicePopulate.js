"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServicePopulate = void 0;
require("reflect-metadata");
var _FakeContactType = require("../../../shared/database/fake/FakeContactType");
var _ContactType = _interopRequireDefault(require("../../contactType/entities/ContactType"));
var _ContactTypeRepository = _interopRequireDefault(require("../../contactType/repository/ContactTypeRepository"));
var _StatusRepository = _interopRequireDefault(require("../../status/repository/StatusRepository"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServicePopulate {
  async execute() {
    const repoStatus = new _StatusRepository.default();
    const status = await repoStatus.findByRef('A');
    if (!status) {
      return 'Status não encontrado';
    }

    // Contact Type
    const repoCT = new _ContactTypeRepository.default();
    _FakeContactType.FakeContactType.forEach(async ct => {
      const add = new _ContactType.default();
      add.name = ct.name;
      add.status = status.id;
      await repoCT.create(add);
    });
    // for (const ct of FakeContactType) {
    // }
    return 'OK';
  }
}
exports.ServicePopulate = ServicePopulate;
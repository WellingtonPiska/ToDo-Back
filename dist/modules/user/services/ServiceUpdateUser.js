"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceUpdateUser = void 0;
require("reflect-metadata");
var _database = require("../../../shared/database");
var _ServiceFindCostCenter = require("../../costCenter/services/ServiceFindCostCenter");
var _ServiceFindProfile = require("../../profile/services/ServiceFindProfile");
var _ServiceFindSector = require("../../sector/services/ServiceFindSector");
var _User = _interopRequireDefault(require("../entities/User"));
var _ServiceFindUser = require("./ServiceFindUser");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceUpdateUser {
  async execute({
    id,
    name,
    lastName,
    login,
    password,
    cpf,
    mail,
    dn,
    sid,
    sector,
    costCenter,
    profile,
    display
  }) {
    const repo = _database.dataSource.getRepository(_User.default);
    const serviceFindUser = new _ServiceFindUser.ServiceFindUser();
    const data = await serviceFindUser.execute({
      id
    });
    let costCenterRef = null;
    if (costCenter) {
      const serviceFindCostCenter = new _ServiceFindCostCenter.ServiceFindCostCenter();
      costCenterRef = await serviceFindCostCenter.execute({
        id: costCenter
      });
    }
    const serviceFindProfile = new _ServiceFindProfile.ServiceFindProfile();
    const profileRef = await serviceFindProfile.execute({
      id: profile
    });
    const serviceFindSector = new _ServiceFindSector.ServiceFindSector();
    const sectorRef = await serviceFindSector.execute({
      id: sector
    });
    const userValid = await repo.createQueryBuilder('user').where('user.use_id_s <> :id and (user.use_display_s = :display )', {
      id,
      display
    }).getOne();
    if (userValid) {
      throw new Error('Duplicate register');
    }
    data.name = name;
    data.password = password;
    data.cpf = cpf;
    data.mail = mail;
    data.dn = dn;
    data.display = display;
    data.lastName = lastName;
    data.sector = sectorRef.id;
    data.profile = profileRef.id;
    data.costCenter = costCenterRef?.id;
    data.login = login;
    data.sid = sid;
    const obj = await repo.save(data);
    return obj;
  }
}
exports.ServiceUpdateUser = ServiceUpdateUser;
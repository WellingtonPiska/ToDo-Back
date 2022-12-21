"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServiceCreateUser = void 0;
require("reflect-metadata");
var _database = require("../../../shared/database");
var _ServiceFindCostCenter = require("../../costCenter/services/ServiceFindCostCenter");
var _ServiceFindProfile = require("../../profile/services/ServiceFindProfile");
var _ServiceFindSector = require("../../sector/services/ServiceFindSector");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _User = _interopRequireDefault(require("../entities/User"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ServiceCreateUser {
  async execute({
    name,
    lastName,
    login,
    cpf,
    sid,
    mail,
    password,
    display,
    sector,
    costCenter,
    profile
  }) {
    const repo = _database.dataSource.getRepository(_User.default);
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const statusRef = await serviceFindRefStatus.execute({
      ref: 'A'
    });
    const serviceFindSector = new _ServiceFindSector.ServiceFindSector();
    const sectorRef = await serviceFindSector.execute({
      id: sector
    });
    const serviceFindProfile = new _ServiceFindProfile.ServiceFindProfile();
    const profileRef = await serviceFindProfile.execute({
      id: profile
    });
    let costCenterRef = null;
    if (costCenter) {
      const serviceFindCostCenter = new _ServiceFindCostCenter.ServiceFindCostCenter();
      costCenterRef = await serviceFindCostCenter.execute({
        id: costCenter
      });
    }
    const userValid = await repo.createQueryBuilder('user').where('user.use_login_s = :login', {
      login
    }).getOne();
    if (userValid) {
      throw new Error('Duplicate register');
    }
    const user = new _User.default();
    user.status = statusRef.id;
    user.sector = sectorRef.id;
    user.profile = profileRef.id;
    user.costCenter = costCenterRef?.id;
    user.name = name;
    user.lastName = lastName;
    user.display = display;
    user.login = login;
    user.password = password;
    user.cpf = cpf;
    user.sid = sid;
    user.mail = mail;
    const obj = await repo.save(user);
    return obj;
  }
}
exports.ServiceCreateUser = ServiceCreateUser;
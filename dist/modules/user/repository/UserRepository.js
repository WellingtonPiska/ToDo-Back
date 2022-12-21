"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _User = _interopRequireDefault(require("../entities/User"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UserRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_User.default);
  }
  async findAll({
    page,
    skip,
    take,
    ref
  }) {
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({
      ref
    });
    const [user, count] = await this.repo.createQueryBuilder('user').skip(skip).take(take).where('user.use_status_s = :ref', {
      ref: status.id
    }).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: user
    };
    return result;
  }
  async findById(id) {
    const data = await this.repo.findOneBy({
      id
    });
    return data;
  }
  async findByName(name) {
    const data = await this.repo.findOneBy({
      name
    });
    return data;
  }
  async findByLogin(login) {
    const data = await this.repo.findOneBy({
      login
    });
    return data;
  }
  async findBySid(sid) {
    const data = await this.repo.findOneBy({
      sid
    });
    return data;
  }
  async findValidUpdate(id, name) {
    const data = await this.repo.createQueryBuilder('user').where('user.use_id_s <> :id and user.use_name_s = :name', {
      id,
      name
    }).getOne();
    return data;
  }
  async findValidSyncUser(login) {
    const data = await this.repo.createQueryBuilder('user').where(' user.use_login_s = :login', {
      login
    }).getOne();
    return data;
  }
  async findNotSyncUser(sync) {
    const data = await this.repo.createQueryBuilder('user').where(`user.use_sync_s <> :sync`, {
      sync
    }).getMany();
    return data;
  }
  async create(user) {
    const data = this.repo.save(user);
    return data;
  }
  async update(user) {
    await this.repo.save(user);
    return user;
  }
  async remove(user) {
    await this.repo.remove(user);
  }
}
exports.default = UserRepository;
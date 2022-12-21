"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _Profile = _interopRequireDefault(require("../entities/Profile"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProfileRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_Profile.default);
  }
  async findAll({
    page,
    skip,
    take,
    ref,
    search
  }) {
    const serviceFindRefStatus = new _ServiceFindRefStatus.ServiceFindRefStatus();
    const status = await serviceFindRefStatus.execute({
      ref
    });
    const [profile, count] = await this.repo.createQueryBuilder('profile').skip(skip).take(take).where(qb => {
      if (search !== undefined) {
        qb.where(`profile.pro_status_s = :ref and  LOWER(profile.pro_name_s) like :search`, {
          ref: status.id,
          search: `%${search}%`
        });
      } else {
        qb.where(`profile.pro_status_s = :ref `, {
          ref: status.id
        });
      }
    }).orderBy('profile.pro_name_s').getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: profile
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
  async findValidUpdate(id, name) {
    const data = await this.repo.createQueryBuilder('profile').where('profile.pro_id_s <> :id and profile.pro_name_s = :name', {
      id,
      name
    }).getOne();
    return data;
  }
  async create(profile) {
    const data = this.repo.save(profile);
    return data;
  }
  async update(profile) {
    await this.repo.save(profile);
    return profile;
  }
  async remove(profile) {
    await this.repo.remove(profile);
  }
}
exports.default = ProfileRepository;
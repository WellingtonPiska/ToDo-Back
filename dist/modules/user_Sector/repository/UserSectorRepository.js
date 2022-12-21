"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _UserSector = _interopRequireDefault(require("../entities/UserSector"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UserSectorRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_UserSector.default);
  }
  async findAll({
    page,
    skip,
    take
  }) {
    const [user_sector, count] = await this.repo.createQueryBuilder('user_sector').skip(skip).take(take).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: user_sector
    };
    return result;
  }
  async findById(id) {
    const data = await this.repo.findOneBy({
      id
    });
    return data;
  }
  async findValidUpdate(id) {
    const data = await this.repo.createQueryBuilder('user_sector').where('user_sector.use_id_s <> :id ', {
      id
    }).getOne();
    return data;
  }
  async create(user_sector) {
    const data = this.repo.save(user_sector);
    return data;
  }
  async update(user_sector) {
    await this.repo.save(user_sector);
    return user_sector;
  }
  async remove(user_sector) {
    await this.repo.remove(user_sector);
  }
}
exports.default = UserSectorRepository;
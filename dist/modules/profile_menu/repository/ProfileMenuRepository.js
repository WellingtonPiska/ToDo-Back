"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _ProfileMenu = _interopRequireDefault(require("../entities/ProfileMenu"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ProfileMenuRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_ProfileMenu.default);
  }
  async findAll({
    page,
    skip,
    take
  }) {
    const [profile_menu, count] = await this.repo.createQueryBuilder('profile_menu').skip(skip).take(take).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: profile_menu
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
    const data = await this.repo.createQueryBuilder('profile_menu').where('profile_menu.pme_id_s <> :id ', {
      id
    }).getOne();
    return data;
  }
  async create(profileMenu) {
    const data = this.repo.save(profileMenu);
    return data;
  }
  async update(profileMenu) {
    await this.repo.save(profileMenu);
    return profileMenu;
  }
  async remove(profileMenu) {
    await this.repo.remove(profileMenu);
  }
}
exports.default = ProfileMenuRepository;
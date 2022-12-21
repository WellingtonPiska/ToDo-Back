"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _DeviceType = _interopRequireDefault(require("../entities/DeviceType"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class DeviceTypeRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_DeviceType.default);
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
    const [deviceType, count] = await this.repo.createQueryBuilder('device_type').skip(skip).take(take).where(qb => {
      if (search !== undefined) {
        qb.where(`device_type.dty_status_s = :ref and  LOWER(device_type.dty_name_s) like :search`, {
          ref: status.id,
          search: `%${search}%`
        });
      } else {
        qb.where(`device_type.dty_status_s = :ref `, {
          ref: status.id
        });
      }
    }).orderBy('device_type.dty_name_s').getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: deviceType
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
    const data = await this.repo.createQueryBuilder('device_type').where('device_type.dty_id_s <> :id and device_type.dty_name_s = :name', {
      id,
      name
    }).getOne();
    return data;
  }
  async create(device_type) {
    const data = this.repo.save(device_type);
    return data;
  }
  async update(device_type) {
    await this.repo.save(device_type);
    return device_type;
  }
  async remove(device_type) {
    await this.repo.remove(device_type);
  }
}
exports.default = DeviceTypeRepository;
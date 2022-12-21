"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _Sector = _interopRequireDefault(require("../entities/Sector"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class SectorRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_Sector.default);
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
    const [cost_center, count] = await this.repo.createQueryBuilder('sector').skip(skip).take(take).where(`sector.sec_status_s = :ref and sector.sec_type_s = 'L'`, {
      ref: status.id
    }).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: cost_center
    };
    return result;
  }
  async findById(id) {
    const data = await this.repo.find({
      where: {
        id
      }
    });
    if (data.length > 0) {
      return data[0];
    }
    return null;
  }
  async findByName(name) {
    const data = await this.repo.findOneBy({
      name
    });
    return data;
  }
  async findByGuid(guid) {
    const data = await this.repo.findOneBy({
      guid
    });
    return data;
  }
  async findAllByType(type, status) {
    const data = await this.repo.createQueryBuilder('sector').where(`sector.sec_type_s = :type and  sector.sec_status_s = :status`, {
      type,
      status
    }).getMany();
    return data;
  }
  async findNotSyncLocaton(sync) {
    const data = await this.repo.createQueryBuilder('sector').where(`sector.sec_sync_s <> :sync and sector.sec_type_s = 'L'`, {
      sync
    }).getMany();
    return data;
  }
  async findNotSyncSector(sync) {
    const data = await this.repo.createQueryBuilder('sector').where(`sector.sec_sync_s <> :sync and sector.sec_type_s = 'S'`, {
      sync
    }).getMany();
    return data;
  }
  async findValidSyncLocation(name) {
    const data = await this.repo.createQueryBuilder('sector').where(`sector.sec_name_s = :name and sector.sec_type_s = 'L'`, {
      name
    }).getOne();
    return data;
  }
  async findValidSyncSector(name, fatherId) {
    const data = await this.repo.createQueryBuilder('sector').where(`sector.sec_name_s = :name and sector.sec_type_s = 'S' and sector.sec_sector_s = :fatherId`, {
      name,
      fatherId
    }).getOne();
    return data;
  }
  async findValidUpdate(id, name) {
    const data = await this.repo.createQueryBuilder('sector').where('sector.sec_id_s <> :id and sector.sec_name_s = :name', {
      id,
      name
    }).getOne();
    return data;
  }
  async create(sector) {
    const data = await this.repo.save(sector);
    return data;
  }
  async update(sector) {
    await this.repo.save(sector);
    return sector;
  }
  async remove(sector) {
    await this.repo.remove(sector);
  }
}
exports.default = SectorRepository;
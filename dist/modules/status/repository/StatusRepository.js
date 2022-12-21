"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("reflect-metadata");
var _database = require("../../../shared/database");
var _Status = _interopRequireDefault(require("../entities/Status"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class StatusRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_Status.default);
  }
  async findAll({
    page,
    skip,
    take
  }) {
    const [status, count] = await this.repo.createQueryBuilder().skip(skip).take(take).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: status
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
  async findByRef(reference) {
    const data = await this.repo.findOneBy({
      reference
    });
    return data;
  }
  async findValid(name, reference) {
    const data = await this.repo.findOneBy({
      name,
      reference
    });
    return data;
  }
  async findValidUpdate(id, name, reference) {
    const data = await this.repo.createQueryBuilder('status').where('status.sta_id_s <> :id and (status.sta_name_s = :name or status.sta_ref_s = :reference)', {
      id,
      name,
      reference
    }).getOne();
    return data;
  }
  async create(status) {
    const data = this.repo.create(status);
    await this.repo.save(status);
    return data;
  }
  async update(status) {
    await this.repo.save(status);
    return status;
  }
  async remove(status) {
    await this.repo.remove(status);
  }
}
exports.default = StatusRepository;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _database = require("../../../shared/database");
var _ServiceFindRefStatus = require("../../status/services/ServiceFindRefStatus");
var _Model = _interopRequireDefault(require("../entities/Model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ModelRepository {
  constructor() {
    this.repo = void 0;
    this.repo = _database.dataSource.getRepository(_Model.default);
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
    const [model, count] = await this.repo.createQueryBuilder('model').skip(skip).take(take).where('model.mod_status_s = :ref', {
      ref: status.id
    }).getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: model
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
    const data = await this.repo.createQueryBuilder('model').where('model.mod_id_s <> :id and model.mod_name_s = :name', {
      id,
      name
    }).getOne();
    return data;
  }
  async create(model) {
    const data = this.repo.save(model);
    return data;
  }
  async update(model) {
    await this.repo.save(model);
    return model;
  }
  async remove(model) {
    await this.repo.remove(model);
  }
}
exports.default = ModelRepository;
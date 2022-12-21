"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableStatus1668092128358 = void 0;
var _typeorm = require("typeorm");
var _SeedStatus = require("../seed/SeedStatus");
class CreateTableStatus1668092128358 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'status',
      columns: [{
        name: 'sta_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_STATUS'
      }, {
        name: 'sta_name_s',
        type: 'varchar',
        length: '30',
        isUnique: true
      }, {
        name: 'sta_ref_s',
        type: 'char',
        length: '1',
        isUnique: true
      }, {
        name: 'sta_color_s',
        type: 'varchar2',
        length: '20'
      }, {
        name: 'sta_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'sta_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.manager.getRepository('status').save(_SeedStatus.SeedStatus);
  }
  async down(queryRunner) {
    await queryRunner.dropTable('status');
  }
}
exports.CreateTableStatus1668092128358 = CreateTableStatus1668092128358;
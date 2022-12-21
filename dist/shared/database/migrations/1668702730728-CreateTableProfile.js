"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableProfile1668702730728 = void 0;
var _typeorm = require("typeorm");
class CreateTableProfile1668702730728 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'profile',
      columns: [{
        name: 'pro_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_PROFILE'
      }, {
        name: 'pro_status_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'pro_name_s',
        type: 'varchar',
        length: '30',
        isUnique: true
      }, {
        name: 'pro_obs_s',
        type: 'varchar',
        isNullable: true
      }, {
        name: 'pro_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'pro_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('profile', new _typeorm.TableForeignKey({
      columnNames: ['pro_status_s'],
      referencedColumnNames: ['sta_id_s'],
      referencedTableName: 'status',
      name: 'FK_PROFILE_STATUS'
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('profile');
  }
}
exports.CreateTableProfile1668702730728 = CreateTableProfile1668702730728;
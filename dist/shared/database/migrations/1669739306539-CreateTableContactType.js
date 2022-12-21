"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableContactType1669739306539 = void 0;
var _typeorm = require("typeorm");
var _SeedContactType = require("../seed/SeedContactType");
class CreateTableContactType1669739306539 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'contact_type',
      columns: [{
        name: 'cty_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_CONTACTTYPE'
      }, {
        name: 'cty_status_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'cty_name_s',
        type: 'varchar',
        length: '30',
        isUnique: true
      }, {
        name: 'cty_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'cty_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('contact_type', new _typeorm.TableForeignKey({
      columnNames: ['cty_status_s'],
      referencedColumnNames: ['sta_id_s'],
      referencedTableName: 'status',
      name: 'FK_CONTACTTYPE_STATUS'
    }));
    await queryRunner.manager.getRepository('contact_type').save(_SeedContactType.SeedContactType);
  }
  async down(queryRunner) {
    await queryRunner.dropTable('contact_type');
  }
}
exports.CreateTableContactType1669739306539 = CreateTableContactType1669739306539;
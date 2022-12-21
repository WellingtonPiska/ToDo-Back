"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableProfileMenu1670529524582 = void 0;
var _typeorm = require("typeorm");
class CreateTableProfileMenu1670529524582 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'profile_menu',
      columns: [{
        name: 'pme_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_PROFILE_MENU'
      }, {
        name: 'pme_menu_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'pme_profile_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'pme_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'pme_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('profile_menu', new _typeorm.TableForeignKey({
      columnNames: ['pme_menu_s'],
      referencedColumnNames: ['men_id_s'],
      referencedTableName: 'menu',
      name: 'FK_PROFILE_MENU_MENU'
    }));
    await queryRunner.createForeignKey('profile_menu', new _typeorm.TableForeignKey({
      columnNames: ['pme_profile_s'],
      referencedColumnNames: ['pro_id_s'],
      referencedTableName: 'profile',
      name: 'FK_PROFILE_MENU_PROFILE'
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('profile_menu');
  }
}
exports.CreateTableProfileMenu1670529524582 = CreateTableProfileMenu1670529524582;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableMenu1670514712634 = void 0;
var _typeorm = require("typeorm");
class CreateTableMenu1670514712634 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'menu',
      columns: [{
        name: 'men_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_MENU'
      }, {
        name: 'men_status_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'men_groupmenu_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'men_menu_s',
        type: 'varchar',
        length: '36',
        isNullable: true
      }, {
        name: 'men_name_s',
        type: 'varchar',
        length: '30',
        isUnique: true
      }, {
        name: 'men_uri_s',
        type: 'varchar',
        length: '60'
      }, {
        name: 'men_icon_s',
        type: 'varchar',
        length: '15'
      }, {
        name: 'men_order_s',
        type: 'number'
      }, {
        name: 'men_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'men_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('menu', new _typeorm.TableForeignKey({
      columnNames: ['men_status_s'],
      referencedColumnNames: ['sta_id_s'],
      referencedTableName: 'status',
      name: 'FK_MENU_STATUS'
    }));
    await queryRunner.createForeignKey('menu', new _typeorm.TableForeignKey({
      columnNames: ['men_menu_s'],
      referencedColumnNames: ['men_id_s'],
      referencedTableName: 'menu',
      name: 'FK_MENU_MENU'
    }));
    await queryRunner.createForeignKey('menu', new _typeorm.TableForeignKey({
      columnNames: ['men_groupmenu_s'],
      referencedColumnNames: ['gme_id_s'],
      referencedTableName: 'group_menu',
      name: 'FK_MENU_GROUPMENU'
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('menu');
  }
}
exports.CreateTableMenu1670514712634 = CreateTableMenu1670514712634;
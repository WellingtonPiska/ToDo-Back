"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableMenuRoutes1670523967450 = void 0;
var _typeorm = require("typeorm");
class CreateTableMenuRoutes1670523967450 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'menu_routes',
      columns: [{
        name: 'mro_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_MENU_ROUTES'
      }, {
        name: 'mro_menu_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'mro_routes_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'mro_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'mro_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('menu_routes', new _typeorm.TableForeignKey({
      columnNames: ['mro_menu_s'],
      referencedColumnNames: ['men_id_s'],
      referencedTableName: 'menu',
      name: 'FK_MENU_ROUTES_MENU'
    }));
    await queryRunner.createForeignKey('menu_routes', new _typeorm.TableForeignKey({
      columnNames: ['mro_routes_s'],
      referencedColumnNames: ['rou_id_s'],
      referencedTableName: 'routes',
      name: 'FK_MENU_ROUTES_ROUTES'
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('menu');
  }
}
exports.CreateTableMenuRoutes1670523967450 = CreateTableMenuRoutes1670523967450;
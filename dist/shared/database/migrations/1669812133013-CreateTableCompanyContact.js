"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTableCompanyContact1669812133013 = void 0;
var _typeorm = require("typeorm");
class CreateTableCompanyContact1669812133013 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: 'company_contact',
      columns: [{
        name: 'cco_id_s',
        type: 'varchar',
        length: '36',
        isPrimary: true,
        primaryKeyConstraintName: 'PK_COMPANY_CONTACT'
      }, {
        name: 'cco_company_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'cco_contacttype_s',
        type: 'varchar',
        length: '36'
      }, {
        name: 'cco_name_s',
        type: 'varchar',
        length: '100'
      }, {
        name: 'cco_mail_s',
        type: 'varchar',
        length: '100',
        isNullable: true
      }, {
        name: 'cco_phone_s',
        type: 'varchar',
        length: '14',
        isNullable: true
      }, {
        name: 'cco_mobile_s',
        type: 'varchar',
        length: '15',
        isNullable: true
      }, {
        name: 'cco_created_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }, {
        name: 'cco_updated_d',
        type: 'timestamp',
        default: 'CURRENT_TIMESTAMP'
      }]
    }));
    await queryRunner.createForeignKey('company_contact', new _typeorm.TableForeignKey({
      columnNames: ['cco_company_s'],
      referencedColumnNames: ['com_id_s'],
      referencedTableName: 'company',
      name: 'FK_COMPANYCONTACT_COMPANY',
      onDelete: 'CASCADE'
    }));
    await queryRunner.createForeignKey('company_contact', new _typeorm.TableForeignKey({
      columnNames: ['cco_contacttype_s'],
      referencedColumnNames: ['cty_id_s'],
      referencedTableName: 'contact_type',
      name: 'FK_COMPANYCONTACT_CONTACTTYPE'
    }));
  }
  async down(queryRunner) {
    await queryRunner.dropTable('company_contact');
  }
}
exports.CreateTableCompanyContact1669812133013 = CreateTableCompanyContact1669812133013;
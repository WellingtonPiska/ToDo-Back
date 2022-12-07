import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableCompanyContact1669812133013
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'company_contact',
        columns: [
          {
            name: 'cco_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_COMPANY_CONTACT',
          },
          {
            name: 'cco_company_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'cco_contacttype_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'cco_name_s',
            type: 'varchar',
            length: '100',
            isUnique: true,
          },
          {
            name: 'cco_mail_s',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'cco_phone_s',
            type: 'varchar',
            length: '14',
            isNullable: true,
          },
          {
            name: 'cco_mobile_s',
            type: 'varchar',
            length: '15',
            isNullable: true,
          },
          {
            name: 'cco_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'cco_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'company_contact',
      new TableForeignKey({
        columnNames: ['cco_company_s'],
        referencedColumnNames: ['com_id_s'],
        referencedTableName: 'company',
        name: 'FK_COMPANYCONTACT_COMPANY',
        onDelete: 'CASCADE',
      })
    );

    await queryRunner.createForeignKey(
      'company_contact',
      new TableForeignKey({
        columnNames: ['cco_contacttype_s'],
        referencedColumnNames: ['cty_id_s'],
        referencedTableName: 'contact_type',
        name: 'FK_COMPANYCONTACT_CONTACTTYPE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('company_contact');
  }
}

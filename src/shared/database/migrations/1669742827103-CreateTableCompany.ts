import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableCompany1669742827103 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'company',
        columns: [
          {
            name: 'com_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_COMPANY',
          },
          {
            name: 'com_status_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'com_name_s',
            type: 'varchar',
            length: '100',
            isUnique: true,
          },
          {
            name: 'com_fantasy_s',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'com_type_s',
            type: 'varchar',
            length: '1',
          },
          {
            name: 'com_inscription_s',
            type: 'varchar',
            length: '21',
          },
          {
            name: 'com_zipcode_s',
            type: 'varchar',
            length: '10',
            isNullable: true,
          },
          {
            name: 'com_street_s',
            type: 'varchar',
            length: '150',
            isNullable: true,
          },
          {
            name: 'com_complement_s',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'com_number_s',
            type: 'varchar',
            length: '20',
            isNullable: true,
          },
          {
            name: 'com_district_s',
            type: 'varchar',
            length: '30',
            isNullable: true,
          },
          {
            name: 'com_city_s',
            type: 'varchar',
            length: '30',
            isNullable: true,
          },
          {
            name: 'com_state_s',
            type: 'varchar',
            length: '30',
            isNullable: true,
          },
          {
            name: 'com_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'com_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'company',
      new TableForeignKey({
        columnNames: ['com_status_s'],
        referencedColumnNames: ['sta_id_s'],
        referencedTableName: 'status',
        name: 'FK_COMPANY_STATUS',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('company');
  }
}

import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableModel1670346604160 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'model',
        columns: [
          {
            name: 'mod_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_MODEL',
          },
          {
            name: 'mod_status_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'mod_devicetype_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'mod_company_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'mod_name_s',
            type: 'varchar',
            length: '30',
            isUnique: true,
          },
          {
            name: 'mod_description_s',
            type: 'varchar',
            length: '60',
            isNullable: true,
          },
          {
            name: 'mod_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'mod_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'model',
      new TableForeignKey({
        columnNames: ['mod_status_s'],
        referencedColumnNames: ['sta_id_s'],
        referencedTableName: 'status',
        name: 'FK_MODEL_STATUS',
      })
    );
    await queryRunner.createForeignKey(
      'model',
      new TableForeignKey({
        columnNames: ['mod_devicetype_s'],
        referencedColumnNames: ['dty_id_s'],
        referencedTableName: 'device_type',
        name: 'FK_MODEL_DEVICE_TYPE',
      })
    );
    await queryRunner.createForeignKey(
      'model',
      new TableForeignKey({
        columnNames: ['mod_company_s'],
        referencedColumnNames: ['com_id_s'],
        referencedTableName: 'company',
        name: 'FK_MODEL_COMAPANY',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('model');
  }
}

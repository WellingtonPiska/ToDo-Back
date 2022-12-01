import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableDeviceType1669915256581 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'device_type',
        columns: [
          {
            name: 'dty_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_DEVICETYPE',
          },
          {
            name: 'dty_status_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'dty_name_s',
            type: 'varchar',
            length: '30',
            isUnique: true,
          },
          {
            name: 'dty_cost_s',
            type: 'decimal',
            length: '6,2',
          },
          {
            name: 'dty_obs_s',
            type: 'varchar',
            length: '30',
            isNullable: true,
          },
          {
            name: 'dty_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'dty_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'device_type',
      new TableForeignKey({
        columnNames: ['dty_status_s'],
        referencedColumnNames: ['sta_id_s'],
        referencedTableName: 'status',
        name: 'FK_DEVICETYPE_STATUS',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('device_type');
  }

}

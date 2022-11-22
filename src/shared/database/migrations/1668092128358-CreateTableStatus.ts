import { MigrationInterface, QueryRunner, Table } from 'typeorm';

import { SeedStatus } from '../seed/SeedStatus';

export class CreateTableStatus1668092128358 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'status',
        columns: [
          {
            name: 'sta_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_STATUS',
          },
          {
            name: 'sta_name_s',
            type: 'varchar',
            length: '30',
            isUnique: true,
          },
          {
            name: 'sta_ref_s',
            type: 'char',
            length: '1',
            isUnique: true,
          },
          {
            name: 'sta_color_s',
            type: 'varchar2',
            length: '20',
          },
          {
            name: 'sta_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'sta_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );

    await queryRunner.manager.getRepository('status').save(SeedStatus);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('status');
  }
}

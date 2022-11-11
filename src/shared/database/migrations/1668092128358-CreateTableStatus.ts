import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableStatus1668092128358 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'STATUS',
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
            isUnique: true,
          },
          {
            name: 'sta_color_s',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'sta_created_d',
            type: 'timestamp',
          },
          {
            name: 'sta_updated_d',
            type: 'timestamp',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('status');
  }
}

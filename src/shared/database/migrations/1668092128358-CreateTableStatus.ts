import { MigrationInterface, QueryRunner, Table } from 'typeorm';

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
            name: 'sta_nome_s',
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
            name: 'sta_cor_s',
            type: 'varchar',
            length: '20',
          },
          {
            name: 'sta_create_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'sta_update_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('status');
  }
}

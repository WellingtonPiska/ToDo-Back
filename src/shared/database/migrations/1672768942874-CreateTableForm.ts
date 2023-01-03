import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableForm1672768942874 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'form',
        columns: [
          {
            name: 'for_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_FORM',
          },
          {
            name: 'for_title_s',
            type: 'varchar',
            length: '30',
            isUnique: true,
          },
          {
            name: 'for_description_s',
            type: 'varchar',
            length: '300',
          },
          {
            name: 'for_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'for_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('form');
  }
}

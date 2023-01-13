import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableBooks1673551609983 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'books',
        columns: [
          {
            name: 'boo_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_BOOK',
          },
          {
            name: 'boo_name_s',
            type: 'varchar',
            length: '50',
            isUnique: true,
          },
          {
            name: 'boo_pages_s',
            type: 'integer',
          },
          {
            name: 'boo_created_s',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'boo_updated_s',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('books');
  }
}

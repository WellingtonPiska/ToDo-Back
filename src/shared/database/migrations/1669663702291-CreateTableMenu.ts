import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableMenu1669663702291 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'menu',
        columns: [
          {
            name: 'men_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_MENU',
          },
          {
            name: 'men_name_s',
            type: 'varchar',
            length: '30',
            isUnique: true,
          },
          {
            name: 'men_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'men_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('menu');
  }
}

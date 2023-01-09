import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableAuthentication1673282959663
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'authentication',
        columns: [
          {
            name: 'aut_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_AUTHENTICATION',
          },
          {
            name: 'aut_user_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'aut_token_s',
            type: 'varchar',
            length: '4000',
          },
          {
            name: 'aut_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'aut_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'authentication',
      new TableForeignKey({
        columnNames: ['aut_user_s'],
        referencedColumnNames: ['use_id_s'],
        referencedTableName: 'user',
        name: 'FK_AUTHENTICATION_USER',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('authentication');
  }
}

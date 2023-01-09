import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableUserTokens1673288987952 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_tokens',
        columns: [
          {
            name: 'uto_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_USER_TOKENS',
          },
          {
            name: 'uto_user_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'uto_refresh_token_s',
            type: 'varchar',
            length: '700',
          },
          {
            name: 'uto_expires_date_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'uto_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'user_tokens',
      new TableForeignKey({
        columnNames: ['uto_user_s'],
        referencedColumnNames: ['use_id_s'],
        referencedTableName: 'user',
        name: 'FK_USER_TOKENS_USER',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_tokens');
  }
}

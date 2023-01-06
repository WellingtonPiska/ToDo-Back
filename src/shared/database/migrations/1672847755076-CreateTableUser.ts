import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUser1672847755076 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'use_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_USER',
          },
          {
            name: 'use_login_s',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'use_password_s',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'use_name_s',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'use_color_s',
            type: 'varchar',
            length: '150',
            isNullable: true,
          },
          {
            name: 'use_lastname_s',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'use_mail_s',
            type: 'varchar',
            length: '60',
          },
          {
            name: 'use_phone_s',
            type: 'varchar',
            length: '15',
            isNullable: true,
          },
          {
            name: 'use_avatar_s',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'use_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'use_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}

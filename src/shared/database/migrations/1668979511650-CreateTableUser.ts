import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableUser1668979511650 implements MigrationInterface {
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
            name: 'use_status_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'use_sector_s',
            type: 'varchar',
            length: '36',
            isNullable: true,
          },
          {
            name: 'use_profile_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'use_costcenter_s',
            type: 'varchar',
            length: '36',
            isNullable: true,
          },
          {
            name: 'use_name_s',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'use_avatar_s',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'use_lastname_s',
            type: 'varchar',
            length: '30',
            isNullable: true,
          },
          {
            name: 'use_display_s',
            type: 'varchar',
            length: '60',
            isUnique: true,
          },
          {
            name: 'use_login_s',
            type: 'varchar',
            length: '20',
            isUnique: true,
          },
          {
            name: 'use_password_s',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'use_cpf_s',
            type: 'varchar',
            length: '14',
            isNullable: true,
          },
          {
            name: 'use_mail_s',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'use_dn_s',
            type: 'varchar',
            length: '150',
            isNullable: true,
          },
          {
            name: 'use_sid_s',
            type: 'varchar',
            length: '150',
            isNullable: true,
          },
          {
            name: 'use_sync_s',
            type: 'varchar',
            length: '36',
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

    await queryRunner.createForeignKey(
      'user',
      new TableForeignKey({
        columnNames: ['use_status_s'],
        referencedColumnNames: ['sta_id_s'],
        referencedTableName: 'status',
        name: 'FK_USER_STATUS',
      })
    );

    await queryRunner.createForeignKey(
      'user',
      new TableForeignKey({
        columnNames: ['use_sector_s'],
        referencedColumnNames: ['sec_id_s'],
        referencedTableName: 'sector',
        name: 'FK_USER_SECTOR',
      })
    );

    await queryRunner.createForeignKey(
      'user',
      new TableForeignKey({
        columnNames: ['use_profile_s'],
        referencedColumnNames: ['pro_id_s'],
        referencedTableName: 'profile',
        name: 'FK_USER_PROFILE',
      })
    );

    await queryRunner.createForeignKey(
      'user',
      new TableForeignKey({
        columnNames: ['use_costcenter_s'],
        referencedColumnNames: ['cce_id_s'],
        referencedTableName: 'cost_center',
        name: 'FK_USER_COSTCENTER',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('profile');
  }
}

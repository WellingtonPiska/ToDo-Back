import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableProfileMenu1670529524582 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'profile_menu',
        columns: [
          {
            name: 'pme_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_PROFILE_MENU',
          },
          {
            name: 'pme_menu_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'pme_profile_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'pme_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'pme_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'profile_menu',
      new TableForeignKey({
        columnNames: ['pme_menu_s'],
        referencedColumnNames: ['men_id_s'],
        referencedTableName: 'menu',
        name: 'FK_PROFILE_MENU_MENU',
      })
    );
    await queryRunner.createForeignKey(
      'profile_menu',
      new TableForeignKey({
        columnNames: ['pme_profile_s'],
        referencedColumnNames: ['pro_id_s'],
        referencedTableName: 'profile',
        name: 'FK_PROFILE_MENU_PROFILE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('profile_menu');
  }
}

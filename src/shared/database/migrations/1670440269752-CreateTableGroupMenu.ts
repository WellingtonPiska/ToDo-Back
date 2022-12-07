import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableGroupMenu1670440269752 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'group_menu',
        columns: [
          {
            name: 'gme_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_GROUPMENU',
          },
          {
            name: 'gme_name_s',
            type: 'varchar',
            length: '30',
            isUnique: true,
          },
          {
            name: 'gme_status_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'gme_description_s',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'gme_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'gme_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'group_menu',
      new TableForeignKey({
        columnNames: ['gme_status_s'],
        referencedColumnNames: ['sta_id_s'],
        referencedTableName: 'status',
        name: 'FK_GROUPMENU_STATUS',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('group_menu');
  }
}

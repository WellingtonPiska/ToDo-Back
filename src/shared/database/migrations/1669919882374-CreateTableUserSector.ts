import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableUserSector1669919882374 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_sector',
        columns: [
          {
            name: 'use_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_USER_USER_SECTOR',
          },
          {
            name: 'use_user_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'use_costcenter_s',
            type: 'varchar',
            length: '36',
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
      'user_sector',
      new TableForeignKey({
        columnNames: ['use_user_s'],
        referencedColumnNames: ['use_id_s'],
        referencedTableName: 'user',
        name: 'FK_USER_SECTOR_USER',
      })
    );
    await queryRunner.createForeignKey(
      'user_sector',
      new TableForeignKey({
        columnNames: ['use_costcenter_s'],
        referencedColumnNames: ['cce_id_s'],
        referencedTableName: 'cost_center',
        name: 'FK_USER_SECTOR_COSTCENTER',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_sector');
  }
}

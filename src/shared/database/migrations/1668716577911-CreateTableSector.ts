import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Place1668716577911 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sector',
        columns: [
          {
            name: 'sec_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_SECTOR',
          },
          {
            name: 'sec_status_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'sec_costcenter_s',
            type: 'varchar',
            length: '36',
            isNullable: true,
          },
          {
            name: 'sec_sector_s',
            type: 'varchar',
            length: '36',
            isNullable: true,
          },
          {
            name: 'sec_name_s',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'sec_type_s',
            type: 'char',
            length: '1',
          },
          {
            name: 'sec_obs_s',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'sec_dn_s',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'sec_guid_s',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'sec_sync_s',
            type: 'varchar',
            length: '36',
            isNullable: true,
          },
          {
            name: 'sec_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'sec_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'sector',
      new TableForeignKey({
        columnNames: ['sec_status_s'],
        referencedColumnNames: ['sta_id_s'],
        referencedTableName: 'status',
        name: 'FK_SECTOR_STATUS',
      })
    );
    await queryRunner.createForeignKey(
      'sector',
      new TableForeignKey({
        columnNames: ['sec_costcenter_s'],
        referencedColumnNames: ['cce_id_s'],
        referencedTableName: 'cost_center',
        name: 'FK_SECTOR_COSTCENTER',
      })
    );
    await queryRunner.createForeignKey(
      'sector',
      new TableForeignKey({
        columnNames: ['sec_sector_s'],
        referencedColumnNames: ['sec_id_s'],
        referencedTableName: 'sector',
        onDelete: 'CASCADE',
        name: 'FK_SECTOR_SECTOR',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

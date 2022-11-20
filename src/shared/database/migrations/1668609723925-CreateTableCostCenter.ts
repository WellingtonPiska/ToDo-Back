import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateTableCostCenter1668609723925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'costcenter',
        columns: [
          {
            name: 'cce_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_COSTCENTER',
          },
          {
            name: 'cce_status_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'cce_name_s',
            type: 'varchar',
            length: '30',
            isUnique: true,
          },
          {
            name: 'cce_apportion_s',
            type: 'char',
            length: '1',
          },
          {
            name: 'cce_obs_s',
            type: 'varchar',
          },
          {
            name: 'cce_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'cce_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'costcenter',
      new TableForeignKey({
        columnNames: ['cce_status_s'],
        referencedColumnNames: ['sta_id_s'],
        referencedTableName: 'status',
        name: 'FK_COSTCENTER_STATUS',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('costcenter');
  }
}

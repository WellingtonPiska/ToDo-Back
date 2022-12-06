import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableApportion1669061984245 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'apportion',
        columns: [
          {
            name: 'app_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_APPORTION',
          },
          {
            name: 'app_costcenter_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'app_apportion_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'app_value_n',
            type: 'integer',
          },
          {
            name: 'app_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'app_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'apportion',
      new TableForeignKey({
        columnNames: ['app_costcenter_s'],
        referencedColumnNames: ['cce_id_s'],
        referencedTableName: 'cost_center',
        name: 'FK_APPORTION_COSTCENTER',
      })
    );

    await queryRunner.createForeignKey(
      'apportion',
      new TableForeignKey({
        columnNames: ['app_apportion_s'],
        referencedColumnNames: ['cce_id_s'],
        referencedTableName: 'cost_center',
        name: 'FK_APPORTION_APPORTION',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('apportion');
  }
}

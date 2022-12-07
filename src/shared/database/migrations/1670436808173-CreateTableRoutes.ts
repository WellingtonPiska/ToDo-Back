import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableRoutes1670433172496 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'routes',
        columns: [
          {
            name: 'rou_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_ROUTES',
          },
          {
            name: 'rou_uri_s',
            type: 'varchar',
            length: '60',
          },
          {
            name: 'rou_description_s',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'rou_method_s',
            type: 'varchar',
            length: '15',
          },
          {
            name: 'rou_status_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'rou_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'rou_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'routes',
      new TableForeignKey({
        columnNames: ['rou_status_s'],
        referencedColumnNames: ['sta_id_s'],
        referencedTableName: 'status',
        name: 'FK_ROUTES_STATUS',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('routes');
  }
}

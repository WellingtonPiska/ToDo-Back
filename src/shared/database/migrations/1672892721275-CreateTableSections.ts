import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableSections1672892721275 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sections',
        columns: [
          {
            name: 'sec_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_SECTIONS',
          },
          {
            name: 'sec_project_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'sec_name_s',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'sec_order_s',
            type: 'integer',
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
      'sections',
      new TableForeignKey({
        columnNames: ['sec_project_s'],
        referencedColumnNames: ['pro_id_s'],
        referencedTableName: 'project',
        name: 'FK_SECTIONS_USER',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('sections');
  }
}

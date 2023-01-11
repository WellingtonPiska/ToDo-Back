import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableProject1672856040815 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'project',
        columns: [
          {
            name: 'pro_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_PROJECT',
          },
          {
            name: 'pro_responsible_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'pro_name_s',
            type: 'varchar',
            length: '30',
          },
          {
            name: 'pro_description_s',
            type: 'varchar',
            length: '300',
          },
          {
            name: 'pro_order_s',
            type: 'integer',
          },
          {
            name: 'pro_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'pro_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'project',
      new TableForeignKey({
        columnNames: ['pro_responsible_s'],
        referencedColumnNames: ['use_id_s'],
        referencedTableName: 'user',
        name: 'FK_PROJECT_USER',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('project');
  }
}

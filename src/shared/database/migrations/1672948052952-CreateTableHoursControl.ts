import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableHoursControl1672948052952
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'hours_control',
        columns: [
          {
            name: 'hco_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_HOURS_CONTROL',
          },
          {
            name: 'hco_project_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'hco_tasks_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'hco_user_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'hco_date_start_s',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'hco_date_end_s',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'hco_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'hco_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'hours_control',
      new TableForeignKey({
        columnNames: ['hco_project_s'],
        referencedColumnNames: ['pro_id_s'],
        referencedTableName: 'project',
        name: 'FK_HOURS_CONTROL_PROJECT',
      })
    );
    await queryRunner.createForeignKey(
      'hours_control',
      new TableForeignKey({
        columnNames: ['hco_tasks_s'],
        referencedColumnNames: ['tas_id_s'],
        referencedTableName: 'tasks',
        name: 'FK_HOURS_CONTROL_TASKS',
      })
    );
    await queryRunner.createForeignKey(
      'hours_control',
      new TableForeignKey({
        columnNames: ['hco_user_s'],
        referencedColumnNames: ['use_id_s'],
        referencedTableName: 'user',
        name: 'FK_HOURS_CONTROL_USER',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('hours_control');
  }
}

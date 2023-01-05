import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableTasks1672936406436 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tasks',
        columns: [
          {
            name: 'tas_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_TASKS',
          },
          {
            name: 'tas_project_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'tas_sections_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'tas_responsible_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'tas_priority_s',
            type: 'char',
            length: '1',
          },
          {
            name: 'tas_percentage_s',
            type: 'decimal',
          },
          {
            name: 'tas_order_s',
            type: 'integer',
          },
          {
            name: 'tas_situation_s',
            type: 'char',
            length: '1',
          },
          {
            name: 'tas_title_s',
            type: 'varchar',
            length: '150',
          },
          {
            name: 'tas_description_s',
            type: 'varchar',
            length: '300',
          },
          {
            name: 'tas_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'tas_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'tasks',
      new TableForeignKey({
        columnNames: ['tas_project_s'],
        referencedColumnNames: ['pro_id_s'],
        referencedTableName: 'project',
        name: 'FK_TASKS_PROJECT',
      })
    );
    await queryRunner.createForeignKey(
      'tasks',
      new TableForeignKey({
        columnNames: ['tas_sections_s'],
        referencedColumnNames: ['sec_id_s'],
        referencedTableName: 'sections',
        name: 'FK_TASKS_SECTIONS',
      })
    );
    await queryRunner.createForeignKey(
      'tasks',
      new TableForeignKey({
        columnNames: ['tas_responsible_s'],
        referencedColumnNames: ['use_id_s'],
        referencedTableName: 'user',
        name: 'FK_TASKS_USER',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tasks');
  }
}

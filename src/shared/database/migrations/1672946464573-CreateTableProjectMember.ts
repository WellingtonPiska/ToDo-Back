import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableProjectMember1672946464573
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'project_member',
        columns: [
          {
            name: 'pme_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_PROJECT_MEMBER',
          },
          {
            name: 'pme_project_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'pme_user_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'pme_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'pme_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'project_member',
      new TableForeignKey({
        columnNames: ['pme_project_s'],
        referencedColumnNames: ['pro_id_s'],
        referencedTableName: 'project',
        name: 'FK_PROJECT_MEMBER_PROJECT',
      })
    );
    await queryRunner.createForeignKey(
      'project_member',
      new TableForeignKey({
        columnNames: ['pme_user_s'],
        referencedColumnNames: ['use_id_s'],
        referencedTableName: 'user',
        name: 'FK_PROJECT_MEMBER_USER',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('project_member');
  }
}

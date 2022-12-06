import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableGroup1669137389081 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'group',
        columns: [
          {
            name: 'gro_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_GROUP',
          },
          {
            name: 'gro_status_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'gro_name_s',
            type: 'varchar',
            length: '45',
            isUnique: true,
          },
          {
            name: 'gro_type_s',
            type: 'char',
            length: '1',
          },
          {
            name: 'gro_mail_s',
            type: 'varchar',
            length: '100',
            isNullable: true,
          },
          {
            name: 'gro_dn_s',
            type: 'varchar',
            length: '150',
          },
          {
            name: 'gro_sid_s',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'gro_sync_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'gro_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'gro_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'group',
      new TableForeignKey({
        columnNames: ['gro_status_s'],
        referencedColumnNames: ['sta_id_s'],
        referencedTableName: 'status',
        name: 'FK_GROUP_STATUS',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('group');
  }
}

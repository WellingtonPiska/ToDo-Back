import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

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
            name: 'app_value_s',
            type: 'varchar',
            length: '45',
            isUnique: true,
          },
          {
            name: 'app_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'app_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'user',
      new TableForeignKey({
        columnNames: ['use_costcenter_s'],
        referencedColumnNames: ['sta_id_s'],
        referencedTableName: 'costcenter',
        name: 'FK_USER_COSTCENTER',
      })
    );

    await queryRunner.createForeignKey(
      'user',
      new TableForeignKey({
        columnNames: ['use_apportion_s'],
        referencedColumnNames: ['sec_id_s'],
        referencedTableName: 'apportion',
        name: 'FK_USER_APPORTION',
      })
    );

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('profile');
  }

}

import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableUserCostCenter1669142969955 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_cost_center',
        columns: [
          {
            name: 'ucc_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_USER_COSTCENTER',
          },
          {
            name: 'ucc_user_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'ucc_costcenter_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'ucc_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'ucc_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'user_cost_center',
      new TableForeignKey({
        columnNames: ['ucc_user_s'],
        referencedColumnNames: ['use_id_s'],
        referencedTableName: 'user',
        name: 'FK_USER_COSTCENTER_USER',
      })
    );
    await queryRunner.createForeignKey(
      'user_cost_center',
      new TableForeignKey({
        columnNames: ['ucc_costcenter_s'],
        referencedColumnNames: ['cce_id_s'],
        referencedTableName: 'cost_center',
        name: 'FK_USER_COSTCENTER_COSTCENTER',
      })
    );

  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}

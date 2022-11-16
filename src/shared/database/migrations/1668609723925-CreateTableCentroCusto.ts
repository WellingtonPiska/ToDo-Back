import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableCentroCusto1668609723925 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'centro_custo',
        columns: [
          {
            name: 'ccu_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_CENTROCUSTO',
          },
          {
            name: 'ccu_status_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'ccu_nome_s',
            type: 'varchar',
            length: '30',
            isUnique: true,
          },
          {
            name: 'ccu_rateio_s',
            type: 'char',
            length: '1',
          },
          {
            name: 'ccu_obs_s',
            type: 'varchar',
          },
          {
            name: 'ccu_create_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'ccu_update_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'centro_custo',
      new TableForeignKey({
        columnNames: ['ccu_status_s'],
        referencedColumnNames: ['sta_id_s'],
        referencedTableName: 'status',
        onDelete: 'CASCADE',
        name: 'FK_CENTROCUSTO_STATUS',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('centro_custo');
  }
}

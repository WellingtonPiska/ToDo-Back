import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Place1668716577911 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'centro_custo',
        columns: [
          {
            name: 'pla_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_PLACE',
          },
          {
            name: 'pla_status_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'pla_nome_s',
            type: 'varchar',
            length: '30',
            isUnique: true,
          },
          {
            name: 'pla_type_s',
            type: 'char',
            length: '1',
          },
          {
            name: 'pla_obs_s',
            type: 'varchar',
          },
          {
            name: 'pla_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'pla_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'place',
      new TableForeignKey({
        columnNames: ['pla_status_s'],
        referencedColumnNames: ['sta_id_s'],
        referencedTableName: 'status',
        onDelete: 'CASCADE',
        name: 'FK_PLACE_STATUS',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}

import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Place1668716577911 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'place',
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
            name: 'pla_costcenter_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'pla_place_s',
            type: 'varchar',
            length: '36',
            isNullable: true
          },
          {
            name: 'pla_name_s',
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
          {
            name: 'pla_dn_s',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'pla_guid_s',
            type: 'varchar',
            isNullable: true
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
    await queryRunner.createForeignKey(
      'place',
      new TableForeignKey({
        columnNames: ['pla_costcenter_s'],
        referencedColumnNames: ['cce_id_s'],
        referencedTableName: 'costcenter',
        onDelete: 'CASCADE',
        name: 'FK_PLACE_COSTCENTER',
      })
    );
    await queryRunner.createForeignKey(
      'place',
      new TableForeignKey({
        columnNames: ['pla_place_s'],
        referencedColumnNames: ['pla_id_s'],
        referencedTableName: 'place',
        onDelete: 'CASCADE',
        name: 'FK_PLACE_PLACE',
      })
    );
  }


  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}

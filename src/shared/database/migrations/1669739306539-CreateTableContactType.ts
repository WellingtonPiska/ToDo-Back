import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';
import { SeedContactType } from '../seed/SeedContactType';

export class CreateTableContactType1669739306539 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'contact_type',
        columns: [
          {
            name: 'cty_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_CONTACTTYPE',
          },
          {
            name: 'cty_status_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'cty_name_s',
            type: 'varchar',
            length: '30',
            isUnique: true,
          },
          {
            name: 'cty_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'cty_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
    await queryRunner.createForeignKey(
      'contact_type',
      new TableForeignKey({
        columnNames: ['cty_status_s'],
        referencedColumnNames: ['sta_id_s'],
        referencedTableName: 'status',
        name: 'FK_CONTACTTYPE_STATUS',
      })
    );
    await queryRunner.manager.getRepository('contact_type').save(SeedContactType);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contact_type');
  }
}

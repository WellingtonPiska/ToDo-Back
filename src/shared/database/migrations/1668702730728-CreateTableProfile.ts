import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateTableProfile1668702730728 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'profile',
        columns: [
          {
            name: 'pro_id_s',
            type: 'varchar',
            length: '36',
            isPrimary: true,
            primaryKeyConstraintName: 'PK_PROFILE',
          },
          {
            name: 'pro_status_s',
            type: 'varchar',
            length: '36',
          },
          {
            name: 'pro_name_s',
            type: 'varchar',
            length: '30',
            isUnique: true,
          },
          {
            name: 'pro_obs_s',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'pro_created_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'pro_updated_d',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'profile',
      new TableForeignKey({
        columnNames: ['pro_status_s'],
        referencedColumnNames: ['sta_id_s'],
        referencedTableName: 'status',
        name: 'FK_PROFILE_STATUS',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('profile');
  }
}

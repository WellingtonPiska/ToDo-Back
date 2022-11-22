import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('status')
class Status {
  @PrimaryColumn({
    name: 'sta_id_s',
    type: 'varchar',
    length: '36',
    primaryKeyConstraintName: 'PK_STATUS',
  })
  id: string;

  @Column({
    name: 'sta_name_s',
    type: 'varchar',
    length: '30',
  })
  name: string;

  @Column({
    name: 'sta_ref_s',
    type: 'char',
    length: '1',
    unique: true,
  })
  reference: string;

  @Column({
    name: 'sta_color_s',
    type: 'varchar',
    length: '20',
  })
  color: string;

  @CreateDateColumn({
    name: 'sta_created_d',
    type: 'timestamp',
  })
  create: Date;

  @UpdateDateColumn({
    name: 'sta_updated_d',
    type: 'timestamp',
  })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Status;

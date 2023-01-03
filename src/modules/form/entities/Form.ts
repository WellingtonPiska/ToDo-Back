import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('form')
class Form {
  @PrimaryColumn({
    name: 'for_id_s',
    type: 'varchar',
    length: '36',
    primaryKeyConstraintName: 'PK_FORM',
  })
  id: string;

  @Column({
    name: 'for_title_s',
    type: 'varchar',
    length: '30',
  })
  title: string;

  @Column({
    name: 'for_description_s',
    type: 'varchar',
    length: '300',
  })
  description: string;

  @CreateDateColumn({
    name: 'for_created_d',
    type: 'timestamp',
  })
  create: Date;

  @UpdateDateColumn({
    name: 'for_updated_d',
    type: 'timestamp',
  })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Form;

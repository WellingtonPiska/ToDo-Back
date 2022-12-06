import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('menu')
class Menu {
  @PrimaryColumn({
    name: 'men_id_s',
    type: 'varchar',
    length: '36',
    primaryKeyConstraintName: 'PK_MENU',
  })
  id: string;

  @Column({
    name: 'men_name_s',
    type: 'varchar',
    length: '30',
  })
  name: string;

  @CreateDateColumn({
    name: 'men_created_d',
    type: 'timestamp',
  })
  create: Date;

  @UpdateDateColumn({
    name: 'men_updated_d',
    type: 'timestamp',
  })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Menu;

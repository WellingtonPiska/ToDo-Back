import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import User from '../../user/entities/User';

@Entity('project')
class Project {
  @PrimaryColumn({
    name: 'pro_id_s',
    type: 'varchar',
    length: '36',
    primaryKeyConstraintName: 'PK_PROJECT',
  })
  id: string;

  @Column({
    name: 'pro_name_s',
    type: 'varchar',
    length: '30',
  })
  name: string;

  @Column({
    name: 'pro_description_s',
    type: 'varchar',
    length: '300',
  })
  description: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'pro_responsible_s' })
  responsibleRef: User;

  @Column({
    name: 'pro_responsible_s',
    type: 'varchar',
    length: '36',
  })
  responsible: string;

  @Column({
    name: 'pro_order_s',
    type: 'varchar',
  })
  order: number;

  @CreateDateColumn({
    name: 'pro_created_d',
    type: 'timestamp',
  })
  create: Date;

  @UpdateDateColumn({
    name: 'pro_updated_d',
    type: 'timestamp',
  })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Project;

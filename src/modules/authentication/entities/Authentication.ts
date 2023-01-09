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

import Tasks from '../../tasks/entities/Tasks';
import User from '../../user/entities/User';

@Entity('authentication')
class Authentication {
  @PrimaryColumn({
    name: 'aut_id_s',
    type: 'varchar',
    length: '36',
    primaryKeyConstraintName: 'PK_AUTHENTICATION',
  })
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'aut_user_s' })
  userRef: Tasks;

  @Column({
    name: 'aut_user_s',
    type: 'varchar',
    length: '36',
  })
  user: string;

  @Column({
    name: 'aut_token_s',
    type: 'varchar',
    length: '4000',
  })
  token: string;

  @CreateDateColumn({
    name: 'aut_created_d',
    type: 'timestamp',
  })
  create: Date;

  @UpdateDateColumn({
    name: 'aut_updated_d',
    type: 'timestamp',
  })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Authentication;

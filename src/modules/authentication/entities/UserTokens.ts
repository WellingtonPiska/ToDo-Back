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

@Entity('user_tokens')
class UserTokens {
  @PrimaryColumn({
    name: 'uto_id_s',
    type: 'varchar',
    length: '36',
    primaryKeyConstraintName: 'PK_USER_TOKENS',
  })
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'uto_user_s' })
  userRef: User;

  @Column({
    name: 'uto_user_s',
    type: 'varchar',
    length: '36',
  })
  user: string;

  @Column({
    name: 'uto_refresh_token_s',
    type: 'varchar',
    length: '30',
  })
  refreshToken: string;

  @CreateDateColumn({
    name: 'uto_created_d',
    type: 'timestamp',
  })
  create: Date;

  @UpdateDateColumn({
    name: 'uto_expires_date_d',
    type: 'timestamp',
  })
  expiresDate: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default UserTokens;

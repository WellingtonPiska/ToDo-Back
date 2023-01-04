import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('user')
class User {
  @PrimaryColumn({
    name: 'use_id_s',
    type: 'varchar',
    length: '36',
    primaryKeyConstraintName: 'PK_USER',
  })
  id: string;

  @Column({
    name: 'use_login_s',
    type: 'varchar',
    length: '30',
  })
  login: string;

  @Column({
    name: 'use_password_s',
    type: 'varchar',
    length: '30',
  })
  password: string;

  @Column({
    name: 'use_name_s',
    type: 'varchar',
    length: '30',
  })
  name: string;

  @Column({
    name: 'use_lastname_s',
    type: 'varchar',
    length: '30',
  })
  lastname: string;

  @Column({
    name: 'use_mail_s',
    type: 'varchar',
    length: '30',
  })
  mail: string;

  @Column({
    name: 'use_phone_s',
    type: 'varchar',
    length: '30',
    nullable: true,
  })
  phone?: string;

  @Column({
    name: 'use_avatar_s',
    type: 'varchar',
    length: '255',
    nullable: true,
  })
  avatar?: string;

  @CreateDateColumn({
    name: 'use_created_d',
    type: 'timestamp',
  })
  create: Date;

  @UpdateDateColumn({
    name: 'use_updated_d',
    type: 'timestamp',
  })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default User;

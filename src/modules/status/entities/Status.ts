import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('status')
class Status {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  references: string;

  @Column()
  color: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Status;

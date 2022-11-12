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
  @PrimaryColumn({ name: 'sta_id_s' })
  id: string;

  @Column({ name: 'sta_name_s' })
  name: string;

  @Column({ name: 'sta_ref_s' })
  reference: string;

  @Column({ name: 'sta_color_s' })
  color: string;

  @CreateDateColumn({ name: 'sta_created_d' })
  created: Date;

  @UpdateDateColumn({ name: 'sta_updated_d' })
  updated: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Status;

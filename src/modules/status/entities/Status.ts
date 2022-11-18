import {
  Column,
  CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn
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

  @CreateDateColumn({ name: 'sta_create_d' })
  create: Date;

  @UpdateDateColumn({ name: 'sta_update_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Status;

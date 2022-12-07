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

import Status from '../../status/entities/Status';

@Entity('group_menu')
class GroupMenu {
  @PrimaryColumn({ name: 'gme_id_s' })
  id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: 'gme_status_s' })
  statusRef: Status;

  @Column({ name: 'gme_status_s' })
  status: string;

  @Column({ name: 'gme_name_s' })
  name: string;

  @Column({ name: 'gme_description_s' })
  description: string;

  @CreateDateColumn({ name: 'gme_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'gme_updated_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default GroupMenu;

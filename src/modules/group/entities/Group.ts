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

@Entity('group')
class Group {
  @PrimaryColumn({ name: 'gro_id_s' })
  id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: 'gro_status_s' })
  statusRef: Status;

  @Column({ name: 'gro_status_s' })
  status: string;

  @Column({ name: 'gro_name_s' })
  name: string;

  @Column({ name: 'gro_type_s' })
  type: string;

  @Column({ name: 'gro_mail_s' })
  mail?: string;

  @Column({ name: 'gro_dn_s' })
  dn: string;

  @Column({ name: 'gro_sid_s' })
  sid: string;

  @Column({ name: 'gro_sync_s' })
  sync: string;

  @CreateDateColumn({ name: 'gro_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'gro_updated_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Group;

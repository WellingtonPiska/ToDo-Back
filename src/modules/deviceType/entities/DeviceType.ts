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

@Entity('device_type')
class DeviceType {
  @PrimaryColumn({ name: 'dty_id_s' })
  id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: 'dty_status_s' })
  statusRef: Status;

  @Column({ name: 'dty_status_s' })
  status: string;

  @Column({ name: 'dty_name_s' })
  name: string;

  @Column({ name: 'dty_obs_s', nullable: true })
  obs?: string;

  @CreateDateColumn({ name: 'dty_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'dty_updated_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default DeviceType;

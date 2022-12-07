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

@Entity('routes')
class Routes {
  @PrimaryColumn({ name: 'rou_id_s' })
  id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: 'rou_status_s' })
  statusRef: Status;

  @Column({ name: 'rou_status_s' })
  status: string;

  @Column({ name: 'rou_uri_s' })
  uri: string;

  @Column({ name: 'rou_method_s' })
  method: string;

  @Column({ name: 'rou_description_s' })
  description: string;

  @CreateDateColumn({ name: 'rou_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'rou_updated_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Routes;

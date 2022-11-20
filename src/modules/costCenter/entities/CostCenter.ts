import {
  Column,
  CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import Status from '../../status/entities/Status';

@Entity('cost_center')
class CostCenter {
  @PrimaryColumn({ name: 'cce_id_s' })
  id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: "cce_status_s" })
  statusRef: Status;

  @Column({ name: 'cce_status_s' })
  status: string;

  @Column({ name: 'cce_apportion_s' })
  apportion: string;

  @Column({ name: 'cce_name_s' })
  name: string;

  @Column({ name: 'cce_obs_s' })
  obs: string;

  @CreateDateColumn({ name: 'cce_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'cce_updated_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default CostCenter;

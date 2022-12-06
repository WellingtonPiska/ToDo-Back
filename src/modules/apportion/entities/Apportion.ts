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

import CostCenter from '../../costCenter/entities/CostCenter';

@Entity('apportion')
class Apportion {
  @PrimaryColumn({ name: 'app_id_s' })
  id: string;

  @ManyToOne(() => CostCenter)
  @JoinColumn({ name: 'app_costcenter_s' })
  costCenterRef: CostCenter;

  @Column({ name: 'app_costcenter_s' })
  costCenter: string;

  @ManyToOne(() => CostCenter)
  @JoinColumn({ name: 'app_apportion_s' })
  apportionRef: CostCenter;

  @Column({ name: 'app_apportion_s' })
  apportion: string;

  @Column({ name: 'app_value_n' })
  value: number;

  @CreateDateColumn({ name: 'app_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'app_updated_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Apportion;

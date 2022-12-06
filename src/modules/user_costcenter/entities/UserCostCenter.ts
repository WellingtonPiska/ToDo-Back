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
import User from '../../user/entities/User';

@Entity('user_costcenter')
class UserCostCenter {
  @PrimaryColumn({ name: 'ucc_id_s' })
  id: string;

  @ManyToOne(() => CostCenter)
  @JoinColumn({ name: 'ucc_costcenter_s' })
  costCenterRef: CostCenter;

  @Column({ name: 'ucc_costcenter_s' })
  costCenter: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'ucc_user_s' })
  userRef: User;

  @Column({ name: 'ucc_user_s' })
  user: string;

  @CreateDateColumn({ name: 'ucc_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'ucc_updated_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default UserCostCenter;

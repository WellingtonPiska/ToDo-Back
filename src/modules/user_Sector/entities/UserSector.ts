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

@Entity('user_sector')
class UserSector {
  @PrimaryColumn({ name: 'use_id_s' })
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'use_user_s' })
  userRef: User;

  @Column({ name: 'use_user_s' })
  user: string;

  @ManyToOne(() => CostCenter)
  @JoinColumn({ name: 'use_costcenter_s' })
  costCenterRef: CostCenter;

  @Column({ name: 'use_costcenter_s' })
  costCenter: string;

  @CreateDateColumn({ name: 'use_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'use_updated_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default UserSector;

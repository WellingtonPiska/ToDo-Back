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
import Profile from '../../profile/entities/Profile';
import Sector from '../../sector/entities/Sector';
import Status from '../../status/entities/Status';

@Entity('user')
class User {
  @PrimaryColumn({ name: 'use_id_s' })
  id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: 'use_status_s' })
  statusRef: Status;

  @Column({ name: 'use_status_s' })
  status: string;

  @ManyToOne(() => Sector)
  @JoinColumn({ name: 'use_sector_s' })
  sectorRef: Sector;

  @Column({ name: 'use_sector_s' })
  sector: string;

  @ManyToOne(() => Profile)
  @JoinColumn({ name: 'use_profile_s' })
  profileRef: Profile;

  @Column({ name: 'use_profile_s' })
  profile: string;

  @ManyToOne(() => CostCenter)
  @JoinColumn({ name: 'use_costcenter_s' })
  costCenterRef: CostCenter;

  @Column({ name: 'use_costcenter_s', nullable: true })
  costCenter?: string;

  @Column({ name: 'use_name_s' })
  name: string;

  @Column({ name: 'use_avatar_s', nullable: true })
  avatar?: string;

  @Column({ name: 'use_lastname_s' })
  lastName?: string;

  @Column({ name: 'use_display_s' })
  display: string;

  @Column({ name: 'use_login_s' })
  login: string;

  @Column({ name: 'use_password_s', nullable: true })
  password?: string;

  @Column({ name: 'use_cpf_s', nullable: true })
  cpf?: string;

  @Column({ name: 'use_mail_s', nullable: true })
  mail?: string;

  @Column({ name: 'use_dn_s', nullable: true })
  dn?: string;

  @Column({ name: 'use_sid_s', nullable: true })
  sid?: string;

  @Column({ name: 'use_sync_s', nullable: true })
  sync?: string;

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

export default User;

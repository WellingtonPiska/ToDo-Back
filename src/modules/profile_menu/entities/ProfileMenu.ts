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

import Menu from '../../menu/entities/Menu';
import Profile from '../../profile/entities/Profile';

@Entity('profile_menu')
class ProfileMenu {
  @PrimaryColumn({ name: 'pme_id_s' })
  id: string;

  @ManyToOne(() => Menu)
  @JoinColumn({ name: 'pme_menu_s' })
  menuRef: Menu;

  @Column({ name: 'pme_menu_s' })
  menu: string;

  @ManyToOne(() => Profile)
  @JoinColumn({ name: 'pme_profile_s' })
  profileRef: Profile;

  @Column({ name: 'pme_profile_s' })
  profile: string;

  @CreateDateColumn({ name: 'pme_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'pme_updated_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default ProfileMenu;

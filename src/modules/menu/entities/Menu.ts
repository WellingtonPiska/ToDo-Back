import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import GroupMenu from '../../groupMenu/entities/GroupMenu';
import Status from '../../status/entities/Status';

@Entity('menu')
class Menu {
  @PrimaryColumn({ name: 'men_id_s' })
  id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: 'men_status_s' })
  statusRef: Status;

  @Column({ name: 'men_status_s' })
  status: string;

  @ManyToOne(() => Menu)
  @JoinColumn({ name: 'men_menu_s' })
  // eslint-disable-next-line no-use-before-define
  menuFatherRef?: Menu;

  @Column({ name: 'men_menu_s', nullable: true })
  menuFather?: string;

  @ManyToOne(() => GroupMenu)
  @JoinColumn({ name: 'men_groupmenu_s' })
  groupMenuRef: GroupMenu;

  @Column({ name: 'men_groupmenu_s' })
  groupMenu: string;

  @Column({ name: 'men_name_s' })
  name: string;

  @Column({ name: 'men_uri_s' })
  uri: string;

  @Column({ name: 'men_icon_s' })
  icon: string;

  @Column({ name: 'men_order_s' })
  order: number;

  @CreateDateColumn({ name: 'men_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'men_updated_d' })
  update: Date;

  @OneToMany(() => Menu, menu => menu.menuFatherRef)
  // eslint-disable-next-line no-use-before-define
  child: Menu[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Menu;

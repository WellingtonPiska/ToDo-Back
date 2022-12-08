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
import Routes from '../../routes/entities/Routes';

@Entity('menu_routes')
class MenuRoutes {
  @PrimaryColumn({ name: 'mro_id_s' })
  id: string;

  @ManyToOne(() => Menu)
  @JoinColumn({ name: 'mro_menu_s' })
  menuRef: Menu;

  @Column({ name: 'mro_menu_s' })
  menu: string;

  @ManyToOne(() => Routes)
  @JoinColumn({ name: 'mro_routes_s' })
  routesRef: Routes;

  @Column({ name: 'mro_routes_s' })
  routes: string;

  @CreateDateColumn({ name: 'mro_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'mro_updated_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default MenuRoutes;

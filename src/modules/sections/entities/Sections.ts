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

import Project from '../../project/entities/Project';

@Entity('sections')
class Sections {
  @PrimaryColumn({
    name: 'sec_id_s',
    type: 'varchar',
    length: '36',
    primaryKeyConstraintName: 'PK_SECTIONS',
  })
  id: string;

  @Column({
    name: 'sec_name_s',
    type: 'varchar',
    length: '30',
  })
  name: string;

  @Column({
    name: 'sec_order_s',
    type: 'varchar',
  })
  order: number;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'sec_project_s' })
  projectRef: Project;

  @Column({
    name: 'sec_project_s',
    type: 'varchar',
    length: '36',
  })
  project: string;

  @CreateDateColumn({
    name: 'sec_created_d',
    type: 'timestamp',
  })
  create: Date;

  @UpdateDateColumn({
    name: 'sec_updated_d',
    type: 'timestamp',
  })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Sections;
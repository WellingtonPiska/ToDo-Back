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
import Sections from '../../sections/entities/Sections';
import User from '../../user/entities/User';

@Entity('tasks')
class Tasks {
  @PrimaryColumn({
    name: 'tas_id_s',
    type: 'varchar',
    length: '36',
    primaryKeyConstraintName: 'PK_TASKS',
  })
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'tas_responsible_s' })
  responsibleRef: User;

  @Column({
    name: 'tas_responsible_s',
    type: 'varchar',
    length: '36',
  })
  responsible: string;

  @ManyToOne(() => Sections)
  @JoinColumn({ name: 'tas_sections_s' })
  sectionsRef: Sections;

  @Column({
    name: 'tas_sections_s',
    type: 'varchar',
    length: '36',
  })
  sections: string;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'tas_project_s' })
  projectRef: Project;

  @Column({
    name: 'tas_project_s',
    type: 'varchar',
    length: '36',
  })
  project: string;

  @Column({
    name: 'tas_priority_s',
    type: 'char',
    length: '1',
  })
  priority: string;

  @Column({
    name: 'tas_title_s',
    type: 'varchar',
    length: '150',
  })
  title: string;

  @Column({
    name: 'tas_description_s',
    type: 'varchar',
    length: '300',
  })
  description: string;

  @Column({
    name: 'tas_situation_s',
    type: 'char',
    length: '1',
  })
  situation: string;

  @Column({
    name: 'tas_order_s',
    type: 'varchar',
  })
  order: number;

  @Column({
    name: 'tas_percentage_s',
    type: 'decimal',
  })
  percentage: number;

  @CreateDateColumn({
    name: 'tas_created_d',
    type: 'timestamp',
  })
  create: Date;

  @UpdateDateColumn({
    name: 'tas_updated_d',
    type: 'timestamp',
  })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Tasks;

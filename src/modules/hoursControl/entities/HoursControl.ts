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
import Tasks from '../../tasks/entities/Tasks';
import User from '../../user/entities/User';

@Entity('hours_control')
class HoursControl {
  @PrimaryColumn({
    name: 'hco_id_s',
    type: 'varchar',
    length: '36',
    primaryKeyConstraintName: 'PK_HOURS_CONTROL',
  })
  id: string;

  @ManyToOne(() => Tasks)
  @JoinColumn({ name: 'hco_tasks_s' })
  tasksRef: Tasks;

  @Column({
    name: 'hco_tasks_s',
    type: 'varchar',
    length: '36',
  })
  tasks: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'hco_user_s' })
  userRef: Tasks;

  @Column({
    name: 'hco_user_s',
    type: 'varchar',
    length: '36',
  })
  user: string;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'hco_project_s' })
  projectRef: Project;

  @Column({
    name: 'hco_project_s',
    type: 'varchar',
    length: '36',
  })
  project: string;

  @Column({
    name: 'hco_date_start_s',
    type: 'varchar',
    length: '50',
  })
  dateStart: string;

  @Column({
    name: 'hco_date_end_s',
    type: 'varchar',
    length: '50',
  })
  dateEnd: string;

  @CreateDateColumn({
    name: 'hco_created_d',
    type: 'timestamp',
  })
  create: Date;

  @UpdateDateColumn({
    name: 'hco_updated_d',
    type: 'timestamp',
  })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default HoursControl;

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
import User from '../../user/entities/User';

@Entity('project_member')
class ProjectMember {
  @PrimaryColumn({
    name: 'pme_id_s',
    type: 'varchar',
    length: '36',
    primaryKeyConstraintName: 'PK_PROJECTMEMBER',
  })
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'pme_user_s' })
  userRef: User;

  @Column({
    name: 'pme_user_s',
    type: 'varchar',
    length: '36',
  })
  user: string;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'pme_project_s' })
  projectRef: Project;

  @Column({
    name: 'pme_project_s',
    type: 'varchar',
    length: '36',
  })
  project: string;

  @CreateDateColumn({
    name: 'pme_created_d',
    type: 'timestamp',
  })
  create: Date;

  @UpdateDateColumn({
    name: 'pme_updated_d',
    type: 'timestamp',
  })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default ProjectMember;

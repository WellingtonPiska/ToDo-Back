import {
  Column,
  CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import Status from '../../status/entities/Status';

@Entity('profile')
class Profile {
  @PrimaryColumn({ name: 'pro_id_s' })
  id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: "pro_status_s" })
  statusRef: Status;

  @Column({ name: 'pro_status_s' })
  status: string;

  @Column({ name: 'pro_name_s' })
  name: string;

  @Column({ name: 'pro_obs_s', nullable: true })
  obs: string;

  @CreateDateColumn({ name: 'pro_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'pro_updated_d' })
  update: Date;




  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Profile;

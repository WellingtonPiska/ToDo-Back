import {
  Column,
  CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import Status from '../../status/entities/Status';

@Entity('contact_type')
class ContactType {
  @PrimaryColumn({ name: 'cty_id_s' })
  id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: "cty_status_s" })
  statusRef: Status;

  @Column({ name: 'cty_status_s' })
  status: string;

  @Column({ name: 'cty_name_s' })
  name: string;

  @CreateDateColumn({ name: 'cty_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'cty_updated_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default ContactType;

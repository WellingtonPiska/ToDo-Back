import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import CompanyContact from '../../companyContact/entities/CompanyContact';
import Status from '../../status/entities/Status';

@Entity('company')
class Company {
  @PrimaryColumn({ name: 'com_id_s' })
  id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: 'com_status_s' })
  statusRef: Status;

  @Column({ name: 'com_status_s' })
  status: string;

  @Column({ name: 'com_name_s' })
  name: string;

  @Column({ name: 'com_fantasy_s' })
  fantasy: string;

  @Column({ name: 'com_type_s' })
  type: string;

  @Column({ name: 'com_inscription_s' })
  inscription: string;

  @Column({ name: 'com_zipcode_s', nullable: true })
  zipCode?: string;

  @Column({ name: 'com_street_s', nullable: true })
  street?: string;

  @Column({ name: 'com_complement_s', nullable: true })
  complement?: string;

  @Column({ name: 'com_number_s', nullable: true })
  number?: string;

  @Column({ name: 'com_district_s', nullable: true })
  district?: string;

  @Column({ name: 'com_city_s', nullable: true })
  city?: string;

  @Column({ name: 'com_state_s', nullable: true })
  state?: string;

  @CreateDateColumn({ name: 'com_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'com_updated_d' })
  update: Date;

  @OneToMany(() => CompanyContact, contact => contact.companyRef)
  contacts: CompanyContact[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Company;

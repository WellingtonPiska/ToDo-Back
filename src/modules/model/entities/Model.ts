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

import Company from '../../company/entities/Company';
import DeviceType from '../../deviceType/entities/DeviceType';
import Status from '../../status/entities/Status';

@Entity('model')
class Model {
  @PrimaryColumn({ name: 'mod_id_s' })
  id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: 'mod_status_s' })
  statusRef: Status;

  @Column({ name: 'mod_status_s' })
  status: string;

  @ManyToOne(() => DeviceType)
  @JoinColumn({ name: 'mod_devicetype_s' })
  deviceTypeRef: DeviceType;

  @Column({ name: 'mod_devicetype_s' })
  deviceType: string;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'mod_company_s' })
  companyRef: Company;

  @Column({ name: 'mod_company_s' })
  company: string;

  @Column({ name: 'mod_name_s' })
  name: string;

  @Column({ name: 'mod_description_s' })
  description?: string;

  @CreateDateColumn({ name: 'mod_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'mod_updated_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Model;

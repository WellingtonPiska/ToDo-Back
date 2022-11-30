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
import ContactType from '../../contactType/entities/ContactType';
import Company from './Company';

@Entity('company_contact')
class CompanyContact {
  @PrimaryColumn({ name: 'cco_id_s' })
  id: string;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'cco_company_s' })
  companyRef: Company;

  @Column({ name: 'cco_company_s' })
  company: string;

  @ManyToOne(() => ContactType)
  @JoinColumn({ name: 'cco_contacttype_s' })
  contactTypeRef: ContactType;

  @Column({ name: 'cco_company_s' })
  concatcType: string;

  @Column({ name: 'cco_name_s' })
  name: string;

  @Column({ name: 'cco_mail_s' })
  mail: string;

  @Column({ name: 'cco_phone_s' })
  phone: string;

  @Column({ name: 'cco_mobile_s' })
  mobile: string;

  @CreateDateColumn({ name: 'cco_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'cco_updated_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default CompanyContact;

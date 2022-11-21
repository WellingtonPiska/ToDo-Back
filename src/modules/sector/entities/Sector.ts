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
import CostCenter from '../../costCenter/entities/CostCenter';
import Status from '../../status/entities/Status';

@Entity('sector')
class Sector {
  @PrimaryColumn({ name: 'sec_id_s' })
  id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: 'sec_status_s' })
  statusRef: Status;

  @Column({ name: 'sec_status_s' })
  status: string;

  @ManyToOne(() => Sector)
  @JoinColumn({ name: 'sec_sector_s' })
  sectorFatherRef?: Sector;

  @Column({ name: 'sec_sector_s' })
  sectorFather?: string;

  @ManyToOne(() => CostCenter)
  @JoinColumn({ name: 'sec_costcenter_s' })
  costCenterRef?: CostCenter;

  @Column({ name: 'sec_costcenter_s', nullable: true })
  costCenter?: string;

  @Column({ name: 'sec_type_s' })
  type: string;

  @Column({ name: 'sec_name_s' })
  name: string;

  @Column({ name: 'sec_obs_s', nullable: true })
  obs: string;

  @Column({ name: 'sec_dn_s', nullable: true })
  dn?: string;

  @Column({ name: 'sec_guid_s', nullable: true })
  guid?: string;

  @CreateDateColumn({ name: 'sec_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'sec_updated_d' })
  update: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Sector;

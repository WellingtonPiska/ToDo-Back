import {
  Column,
  CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import CostCenter from '../../costCenter/entities/CostCenter';
import Status from '../../status/entities/Status';

@Entity('place')
class Place {
  @PrimaryColumn({ name: 'pla_id_s' })
  id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: "pla_status_s" })
  statusRef: Status;

  @Column({ name: 'pla_status_s' })
  status: string;

  @ManyToOne(() => Place)
  @JoinColumn({ name: "pla_place_s" })
  placeFatherRef?: Place;

  @Column({ name: 'pla_place_s' })
  placeFather?: string;

  @ManyToOne(() => CostCenter)
  @JoinColumn({ name: "pla_costcenter_s" })
  costCenterRef: CostCenter;

  @Column({ name: 'pla_costcenter_s' })
  costCenter: string;

  @Column({ name: 'pla_type_s' })
  type: string;

  @Column({ name: 'pla_name_s' })
  name: string;

  @Column({ name: 'pla_obs_s', nullable: true })
  obs: string;

  @CreateDateColumn({ name: 'pla_created_d' })
  create: Date;

  @UpdateDateColumn({ name: 'pla_updated_d' })
  update: Date;

  @Column({ name: 'pla_dn_s', nullable: true })
  dn?: string;

  @Column({ name: 'pla_guid_s', nullable: true })
  guid?: string;


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Place;

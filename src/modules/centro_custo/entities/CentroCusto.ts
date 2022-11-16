import Status from '../../status/entities/Status';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('centro_custo')
class CentroCusto {
  @PrimaryColumn({ name: 'ccu_id_s' })
  id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: "ccu_status_s" })
  statusRef: Status;

  @Column({ name: 'ccu_status_s' })
  status: string;

  @Column({ name: 'ccu_rateio_s' })
  rateio: string;

  @Column({ name: 'ccu_nome_s' })
  nome: string;

  @Column({ name: 'ccu_obs_s' })
  obs: string;

  @CreateDateColumn({ name: 'ccu_create_d' })
  create: Date;

  @UpdateDateColumn({ name: 'ccu_update_d' })
  update: Date;




  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default CentroCusto;
